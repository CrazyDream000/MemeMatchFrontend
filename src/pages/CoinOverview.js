import React, { useState,useEffect,Fragment, startTransition} from 'react';
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {Line} from 'react-chartjs-2';
import ReactApexCharts from 'apexcharts'
import LineChart from '../component/LineChart';
import { Circle2 } from 'react-preloaders';
import {BsStarFill, BsStarHalf, BsStar, BsHeart, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {BounceLoader} from 'react-spinners'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import TwitterFeed from '../component/TwitterFeed';

function CoinOverview(props) {
    const { id } = useParams();
    const Background1 = require('../assets/img/tokens/back1.png');
    const heart = require('../assets/img/tokens/Vector.png');
    const downPic = require('../assets/img/tokens/down.png');
    const [coinLists, setCoinLists] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);
    const [coinDetail, setCoinDetail] = useState(null);

    const [searchState, setSearchState] = useState(1);
    const [currentId, setCurrentId] = useState(-1);
    const [showModalFlag, setShowModalFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showAlertFlag, setShowAlertFlag] = useState(false);
    const [showAlertText, setShowAlertText] = useState("");
  
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
    //coingecko api function get coins market data
    const fetchData = async () => {
      const coinListresult = await axios.get(
          'https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h&locale=en&x_cg_pro_api_key=CG-cYLMAXA7qqWnK5RXS8WAw5Jk'
      );
      setCoinLists(coinListresult.data);

    };
    const getCoinData = async (coinID, period) => {
      setIsLoading(true);
      const result = await axios.get(
          `https://pro-api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=${period}&interval=hourly&x_cg_pro_api_key=CG-cYLMAXA7qqWnK5RXS8WAw5Jk`
      );
      const coinResult = await axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/${coinID}?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false&x_cg_pro_api_key=CG-cYLMAXA7qqWnK5RXS8WAw5Jk`
      );

      setCoinDetail(coinResult.data.links.twitter_screen_name);
      setHistoricalData(result.data.prices);
      setCurrentId(coinID);
      setSearchState(period);
      setIsLoading(false);
    };

    let captionContent=[];
    let chartContent = [];
    let modalContent = [];

    if(coinLists)
    {
      for(var i = 0; i < coinLists.length; i ++)
      {
        if(coinLists[i].id == currentId)
        {
          const prevId = i>0?coinLists[i-1].id:coinLists[coinLists.length-1].id;
          const nextId = i<(coinLists.length-1)?coinLists[i+1].id:coinLists[0].id;
          let starContent=[];
          let val = coinLists[i].market_cap / coinLists[3].market_cap * 5;
          for(var j = 0 ; j < 5; j ++){
            if(j<val)
              starContent = [...starContent, (
                <BsStarFill className='text-purple-500'/>
              )];
            else
              starContent = [...starContent, (
                <BsStar/>
              )];
          }
          captionContent = (
            <div className='w-full h-[200px] sm:h-[300px] overflow-hidden relative flex justify-between items-center'>
              <img className='absolute w-full -top-[100px] md:-top-[200px] lg:-top-[400px] xl:-top-[600px] z-0' src={Background1}></img>
              <button className='ml-5 w-10 h-10 bg-white rounded-full transition delay-[40] hover:bg-gray-400 hover:text-white z-10 relative flex justify-center items-center' onClick={()=>{getCoinData(prevId,1)}}>
                  <BsArrowLeftShort className='w-8 h-8'/>
              </button>
              <div className='flex flex-col relative justify-center items-center space-y-3 sm:space-y-10'>
                  <div className='flex flex-col items-center'>
                     <div className='bg-white rounded-full p-5'><img src={coinLists[i].image} className='w-10 sm:w-20 h-10 sm:h-20'></img></div>
                      <div className='text-2xl lg:text-5xl font-bold text-white'>{coinLists[i].symbol.toUpperCase()}</div>
                  </div>
                  <button className='w-10 h-10 text-black bg-white rounded-full flex justify-center items-center transition delay-[40] hover:bg-red-500 hover:text-white'><BsHeart/></button>
              </div>
              <button className='mr-5 w-10 h-10 bg-white rounded-full transition delay-[40] hover:bg-gray-400 hover:text-white z-10 relative flex justify-center items-center' onClick={()=>{getCoinData(nextId,1)}}>
                <BsArrowRightShort className='w-8 h-8'/>
              </button>
            </div>
          );
          let market_cap_change_rate = ((historicalData[historicalData.length-1][1] - historicalData[0][1])/historicalData[0][1] * 100);
          chartContent = (
          <div className='w-full flex flex-col lg:grid lg:grid-cols-9'>
              <div className='col-span-6 py-4 h-[70vh] md:h-full'>
                <div className='text-2xl px-4  md:px-10  lg:text-5xl text-center font-bold lg:text-left'>{"$" + coinLists[i].market_cap.toLocaleString()}</div>
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
                    (<div className='ml-2 px-3 py-2 w-20 bg-[#D8494A] text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate'></img>
                        <div className='font-bold text-white text-sm'>{market_cap_change_rate.toFixed(2)+"%"}</div>
                    </div>):
                    (<div className='ml-2 px-3 py-2 w-20  bg-teal-500 text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate-180'></img>
                        <div className='font-bold text-white text-sm'>{market_cap_change_rate.toFixed(2)+"%"}</div>
                    </div>)}
                </div>
                <div className="pb-32 md:pb-0">
                   <LineChart historicalData={historicalData}></LineChart>
                   <div className='w-full last:block last:lg:hidden'>
                   <TwitterFeed isPc={false} coinDetail={coinDetail}></TwitterFeed>
                   </div>
                </div>
                <div className=' px-4  md:px-10 hidden md:flex md:flex-row space-x-2 w-full justify-center'>
                  {starContent}
                </div>
              </div>
              <div className='col-span-3 p-5 md:p-10 bg-white fixed bottom-0 w-full md:relative flex flex-col space-y-5 md:space-y-0'>
                <div className='flex flex-row md:hidden space-x-2 w-full justify-center'>
                  {starContent}
                </div>
                <button className='px-5 py-2 bg-purple-600 text-white text-lg rounded-lg w-full hover:bg-purple-800' onClick={()=>{
                    setShowModalFlag(true);
                }}>Buy Mong</button>
                <div className='w-full pt-4 last:hidden last:lg:block'>
                   <TwitterFeed isPc={false} coinDetail={coinDetail}></TwitterFeed>
                   </div>
              </div>
          </div>);

          modalContent = (
            <div className='fixed top-0 w-full h-full z-30 flex justify-center transition delay-[40]'>
              <div className='w-full h-full bg-black/30 ' onClick={()=>{setShowModalFlag(false)}}></div>
              <div className='fadeup absolute bottom-0 transition delay-[40] w-full md:w-[450px] md:bottom-[50px] bg-white px-5 py-4 rounded-none lg:rounded-2xl flex flex-col items-center space-y-2 z-40'>
               <iframe width="400" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
               src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0xf648F4646fd6CfE6b3107F47e130FF9bbda6152C&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=20&onRampTokenAddress=eth&onRampLockToken=true&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%235e38f4&backgroundColor=transparent&roundedCorners=10&padding=22&refId=96VUv9" >
               </iframe>
              </div>
            </div>
          );
        }
      }
    }
    return (
    
      <div className="relative">
        {isLoading?(<div className='w-full h-[100vh] flex justify-center items-center'><BounceLoader className='self-center' color="#36d7b7"/></div>):(
          <div>
          <div className='p-6 bg-violet-700 lg:flex lg:flex-col justify-center items-center gap-4 relative'>
            <div className='text-2xl text-white font-bold flex gap-2 items-end'>
              <div>Meme</div><img src={heart} className='w-6 h-6'></img><div>Match</div>
            </div>
          </div>
          {captionContent}
          {chartContent}
          {showModalFlag?modalContent:""}
          {showAlertFlag?(
            <div className='fixed top-0 w-full h-full z-30 flex justify-center transition delay-[40]'>
              <div className='w-full h-full bg-black/30 ' onClick={()=>{setShowAlertFlag(false)}}></div>
              <div className='fadeshow absolute top-[300px] transition delay-[40] w-[300px] lg:w-[600px] bg-violet-900 px-10 py-4 rounded-none lg:rounded-2xl flex flex-col space-y-4 z-40'>
                <div className='font-bold text-2xl text-white'><span>ALERT</span></div>
                <div className='text-xl text-white'>{showAlertText}</div>
                <button className='px-5 py-2 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-500' onClick={()=>{setShowAlertFlag(false)}}>OK</button>
              </div>
            </div>
            ):(<div></div>)}
          </div>
        )}         
      </div>
    );
  }
  
  export default CoinOverview;
