import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import {getDocs, collection, getDoc,} from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import axios from 'axios';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZupJYnwC9TZUamcPQs5H6b1nrlGqxf5U",
  authDomain: "memematch-91ab9.firebaseapp.com",
  projectId: "memematch-91ab9",
  storageBucket: "memematch-91ab9.appspot.com",
  messagingSenderId: "669875291549",
  appId: "1:669875291549:web:ccf37962329db4b7cc9b74",
  measurementId: "G-X9Q5H7BQJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

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
