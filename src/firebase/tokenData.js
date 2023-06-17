import {db, storage} from '../firebase/firebase';
import {getDocs, collection, getDoc,} from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import axios from 'axios';

export async function getTokenData (doc) {
    const tokenInfo = doc.data();
    const tokenWallpaper = await getDoc(tokenInfo.heroImage[0]);
    const tokenLogo = await getDoc(tokenInfo.squareIcon[0]);
    const tokenBackground = await getDoc(tokenInfo.squareBackground[0]);
    const [tokenWallpaperUrl, tokenLogoUrl, tokenBackgroundUrl] = await Promise.all([
        getDownloadURL(ref(storage, 'flamelink/media/' + tokenWallpaper.data().file)),
        getDownloadURL(ref(storage, 'flamelink/media/' + tokenLogo.data().file)),
        getDownloadURL(ref(storage, 'flamelink/media/' + tokenBackground.data().file))
    ]);
    const tokenDatainfo = await axios.get(`https://api.dev.dex.guru/v1/chain/1/tokens/${tokenInfo.contractAddress}/market?api-key=S5a8FMI9fWx7A9zOFFQV0_6qg7GcSg3ghAj_TWISkoc`);
    
    return {
        name: tokenInfo.tokenName,
        symbol: tokenInfo.ticker,
        wallpaper_url: tokenWallpaperUrl,
        logo_url: tokenLogoUrl,
        background_url: tokenBackgroundUrl,
        twitterUrl: tokenInfo.twitterUrl,
        telegramUrl: tokenInfo.telegramUrl,
        seo: tokenInfo.seo,
        data: tokenDatainfo.data,
    };
};
  