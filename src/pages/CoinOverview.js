import React, { useState,useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import LineChart from '../component/LineChart';
import {BsStarFill, BsStar, BsHeart, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {BounceLoader} from 'react-spinners'
import TwitterFeed from '../component/TwitterFeed';
import {BsTelegram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaTwitter, FaTelegramPlane} from 'react-icons/fa';

import { LazyLoadImage } from "react-lazy-load-image-component";
import {db, storage,getTokenData} from '../firebase/firebase';
import {getDocs, collection, getDoc,} from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";

import back from "../assets/img/tokens/back2.png"


function CoinOverview(props) {
    const { id } = useParams();
    const Background1 = require('../assets/img/tokens/back1.png');
    const heart = require('../assets/img/tokens/Vector.png');
    const downPic = require('../assets/img/tokens/down.png');
    const [coinLists, setCoinLists] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);

    const [searchState, setSearchState] = useState(1);
    const [currentId, setCurrentId] = useState(-1);
    const [showModalFlag, setShowModalFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        ///Connect Wallet
        // This code will be executed only once, similar to componentDidMount
        //this.interval = setInterval (() => this. fetchCurrencyData (), 60 *1000)   
        getCoinData(id,1);
        fetchData();
        return () => {
          // This code will be executed just before unmounting the component, similar to componentWillUnmount
        };
    }, []); 

    const fetchData = async () => {
      //get tokenlist data from firebase
      try {
        const querySnapshot = await getDocs(collection(db, "fl_content"));  
        const newData = await Promise.all(
            querySnapshot.docs.map((doc) => {
                return getTokenData(doc);
            })
        );
        setCoinLists(newData);
      } catch (error) {
          console.error(error);
      }
    };

    const getCoinData = async (coinID, period) => {
      if(currentId != coinID)
        setIsLoading(true);
      const toDate = (Date.now() / 1000).toFixed(0);
      const fromDate = toDate - period * 86400;
      const tokenTradingData = await axios.get(`https://api.dev.dex.guru/v1/tradingview/history?symbol=${coinID}-eth_USD&resolution=60&from=${fromDate}&to=${toDate}&currencyCode=USD&api-key=S5a8FMI9fWx7A9zOFFQV0_6qg7GcSg3ghAj_TWISkoc`);
        
      setHistoricalData(tokenTradingData.data);
      setCurrentId(coinID);
      setSearchState(period);
      setIsLoading(false);
    };

    let captionContent=[];
    let chartContent = [];
    let modalContent = [];

    if(coinLists != undefined)
    {
      for(var i = 0; i < coinLists.length; i ++)
      {
        if(coinLists[i].data.address == currentId)
        {
          const prevId = i>0?coinLists[i-1].data.address:coinLists[coinLists.length-1].data.address;
          const nextId = i<(coinLists.length-1)?coinLists[i+1].data.address:coinLists[0].data.address;
          let starContent=[];
          for(var j = 0 ; j < 5; j ++){
              starContent = [...starContent, (
                <BsStarFill className='text-purple-500'/>
              )];
          }
          captionContent = (
            <div className='w-full h-[170px] sm:h-[300px] overflow-hidden relative flex justify-between items-center'>
              <img className='absolute w-full h-full z-0' src={coinLists[i].wallpaper_url}></img>
              {/* <div className='absolute w-full z-0'>
                <LazyLoadImage placeholderSrc={back} src={coinLists[i].wallpaper_url} effect="blur"/>
              </div> */}
              <button className='ml-5 w-10 h-10 bg-white rounded-full transition delay-[40] hover:bg-gray-400 hover:text-white z-10 relative flex justify-center items-center' onClick={()=>{getCoinData(prevId,1)}}>
                  <BsArrowLeftShort className='w-8 h-8'/>
              </button>
              <div className='flex flex-col relative justify-center items-center space-y-3 sm:space-y-10'>
                  <div className='flex flex-col items-center'>
                     <div className='bg-white rounded-full p-5'><img src={coinLists[i].logo_url} className='w-10 sm:w-20 h-10 sm:h-20'></img></div>
                      <div className='text-2xl lg:text-5xl font-bold text-white'>{coinLists[i].symbol.toUpperCase()}</div>
                  </div>
                  <button className='w-10 h-10 text-black bg-white rounded-full flex justify-center items-center transition delay-[40] hover:bg-red-500 hover:text-white'><BsHeart/></button>
              </div>
              <button className='mr-5 w-10 h-10 bg-white rounded-full transition delay-[40] hover:bg-gray-400 hover:text-white z-10 relative flex justify-center items-center' onClick={()=>{getCoinData(nextId,1)}}>
                <BsArrowRightShort className='w-8 h-8'/>
              </button>
            </div>
          );
          const twitterUrl = coinLists[i].twitterUrl.split('/');
          let market_cap_change_rate = ((historicalData.c[historicalData.c.length - 1] - historicalData.c[0])/historicalData.c[0] * 100);
          let decimalCnt = 0;
          let tmp = coinLists[i].data.token_supply / coinLists[i].data.liquidity_usd;
          while(tmp >= 1){
            tmp /= 10;
            decimalCnt ++;
          }
          decimalCnt += 2;
          chartContent = (
          <div className='w-full flex flex-col lg:grid lg:grid-cols-9 px-0 md:px-4 lg:px-10'>
              <div className='col-span-6 py-4 h-[70vh] md:h-full'>
                  <div className='text-2xl px-4  md:px-10  lg:text-5xl text-center font-bold flex justify-between'>
                    <div>{"$" + coinLists[i].data.liquidity_usd.toLocaleString()}</div>
                    <div className='flex space-x-2 items-center'>
                      <a href={coinLists[i].telegramUrl}>
                      <div className='bg-blue-500 rounded-[50%] p-2'>
                          <FaTelegramPlane className='text-white md:text-xl text-xs' />
                        </div>
                      </a>
                      <a href={coinLists[i].twitterUrl} className='flex'>
                        <div className='bg-blue-500 rounded-[50%] p-2'>
                          <FaTwitter className='text-white md:text-xl text-xs' />
                        </div>
                      </a>
                    </div>
                  </div>
                <div className='flex px-4  md:px-10  py-4 md:space-x-10 font-bold justify-between md:justify-start'>
                  {searchState == 1?
                      (<button className='px-2 py-1 bg-purple-500 text-md md:text-lg text-white rounded-lg' onClick={()=>{getCoinData(currentId, 1)}}>Today</button>):
                      (<button className='px-2 py-1 text-gray-500 text-md md:text-lg transition delay-[40] hover:bg-purple/100 hover:text-white rounded-lg' onClick={()=>{getCoinData(currentId, 1)}}>Today</button>)
                  }
                  {searchState == 7?
                      (<button className='px-2 py-1 bg-purple-500 text-md md:text-lg text-white rounded-lg' onClick={()=>{getCoinData(currentId, 7)}}>7 days</button>):
                      (<button className='px-2 py-1 text-gray-500 text-md md:text-lg transition delay-[40] hover:bg-purple/100 hover:text-white rounded-lg' onClick={()=>{getCoinData(currentId, 7)}}>7 days</button>)
                  }
                  {searchState == 14?
                      (<button className='px-2 py-1 bg-purple-500 text-md md:text-lg text-white rounded-lg' onClick={()=>{getCoinData(currentId, 14)}}>14 days</button>):
                      (<button className='px-2 py-1 text-gray-500 text-md md:text-lg transition delay-[40] hover:bg-purple/100 hover:text-white rounded-lg' onClick={()=>{getCoinData(currentId, 14)}}>14 days</button>)
                  }
                  {market_cap_change_rate<0?
                    (<div className='ml-2 px-3 py-2 bg-[#D8494A] text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate'></img>
                        <div className='font-bold text-white text-sm'>{market_cap_change_rate.toFixed(2)+"%"}</div>
                    </div>):
                    (<div className='ml-2 px-3 py-2  bg-teal-500 text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate-180'></img>
                        <div className='font-bold text-white text-sm'>{market_cap_change_rate.toFixed(2)+"%"}</div>
                    </div>)}
                </div>
                <div className="pb-32 md:pb-0">
                   <LineChart historicalData={historicalData} decimalCnt={decimalCnt}></LineChart>
                   <div className='w-full last:block last:lg:hidden'>
                   <TwitterFeed isPc={false} coinDetail={twitterUrl[twitterUrl.length - 1]}></TwitterFeed>
                   </div>
                </div>
                <div className=' px-4  md:px-10 hidden md:flex md:flex-row space-x-2 w-full justify-center'>
                  {starContent}
                </div>
              </div>
              <div className='col-span-3 pt-5 px-5 md:px-10 bg-white fixed bottom-0 w-full md:relative flex flex-col space-y-2 md:space-y-0'>
                <div className='flex flex-row md:hidden space-x-2 w-full justify-center'>
                  {starContent}
                </div>
                <div className='px-2'><button className='py-2 bg-purple-600 text-white text-lg rounded-lg w-full hover:bg-purple-800' onClick={()=>{
                    setShowModalFlag(true);
                }}>Buy Mong</button></div>
                <div className='w-full last:hidden last:lg:block'>
                   <TwitterFeed isPc={false} coinDetail={coinLists[i].name}></TwitterFeed>
                   </div>
              </div>
          </div>);

          modalContent = (
            <div className='fixed top-0 w-full h-full z-30 flex justify-center items-center transition delay-[40]'>
              <div className='w-full h-full bg-black/30 ' onClick={()=>{setShowModalFlag(false)}}></div>
              <div className='fadeshow fixed transition delay-[40] w-full md:w-[450px] bg-white px-5 py-4 rounded-none lg:rounded-2xl flex flex-col items-center space-y-2 z-40'>
               <iframe className="w-full" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
               src={`https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=${currentId}&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=20&onRampTokenAddress=eth&onRampLockToken=true&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%235e38f4&backgroundColor=transparent&roundedCorners=10&padding=22&refId=96VUv9`} >
               </iframe>
              </div>
            </div>
          );
        }
      }
    }
    return (
    
      <div className="relative">
        {isLoading?(<div className='w-full h-[100vh] flex justify-center items-center'><BounceLoader className='self-center' color="#6D28D9"/></div>):(
          <div>
          <div className='p-6 bg-violet-700 lg:flex lg:flex-col justify-center items-center gap-4 relative'>
            <div className='text-2xl text-white font-bold flex gap-2 items-end'>
              <div>Meme</div><img src={heart} className='w-6 h-6'></img><div>Match</div>
            </div>
          </div>
          {captionContent}
          {chartContent}
          {showModalFlag?modalContent:""}
      
          </div>
        )}         
      </div>
    );
  }
  
  export default CoinOverview;
