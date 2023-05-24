import React, { useState,useEffect,Fragment, startTransition} from 'react';
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {Line} from 'react-chartjs-2';
import ReactApexCharts from 'apexcharts'
import LineChart from '../component/LineChart';
import { Circle2 } from 'react-preloaders';
import {BsStarFill, BsStarHalf, BsStar, BsHeart, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

function CoinOverview(props) {
    const { id } = useParams();
    const Background1 = require('../assets/img/tokens/back1.png');
    const heart = require('../assets/img/tokens/Vector.png');

    const [coinLists, setCoinLists] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);
    const [searchState, setSearchState] = useState(1);
    const [currentId, setCurrentId] = useState(-1);
    const [showModalFlag, setShowModalFlag] = useState(false);
    const downPic = require('../assets/img/tokens/down.png');
    useEffect(() => {
        // This code will be executed only once, similar to componentDidMount
        //this.interval = setInterval (() => this. fetchCurrencyData (), 60 *1000)
        const fetchData = async () => {
          const coinListresult = await axios.get(
              'https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h&locale=en&x_cg_pro_api_key=CG-cYLMAXA7qqWnK5RXS8WAw5Jk'
          );
          setCoinLists(coinListresult.data);
        
        };
            
        getCoinData(id,1);
        fetchData();
        return () => {
          // This code will be executed just before unmounting the component, similar to componentWillUnmount
          
        };
    }, []); 
    const onButtonClick = () => {
      alert("1");
    }
    async function getCoinData (coinID, period) {
      const result = await axios.get(
          `https://pro-api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=${period}&interval=hourly&x_cg_pro_api_key=CG-cYLMAXA7qqWnK5RXS8WAw5Jk`
      );
      setHistoricalData(result.data.prices);
      setCurrentId(coinID);
      setSearchState(period);
    };
    let captionContent=[];
    let chartContent = [];
    let modalContent = [];
    if (!historicalData) {
        return <div className='w-full h-full flex justify-center items-center'><svg class="text-black animate-spin h-20 w-20" viewBox="0 0 24 24"></svg></div>;
    }
    if(coinLists)
    {
      for(var i = 0; i < coinLists.length; i ++)
      {
        if(coinLists[i].id == currentId)
        {
          console.log("current Coin Data-----");
          console.log(coinLists[i]);
          const prevId = i>0?coinLists[i-1].id:coinLists[coinLists.length-1].id;
          const nextId = i<(coinLists.length-1)?coinLists[i+1].id:coinLists[0].id;
          let starContent=[];
          let val = coinLists[i].market_cap / coinLists[3].market_cap * 5;
          console.log("val:",val);
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
            <div className='w-full h-[300px] overflow-hidden relative flex justify-between items-center'>
              <img className='absolute w-full -top-[100px] md:-top-[200px] lg:-top-[400px] xl:-top-[600px] z-0' src={Background1}></img>
              <button className='ml-5 w-10 h-10 bg-white rounded-full transition delay-[40] hover:bg-gray-400 hover:text-white z-10 relative flex justify-center items-center' onClick={()=>{getCoinData(prevId,1)}}>
                  <BsArrowLeftShort/>
              </button>
              <div className='flex flex-col relative justify-center items-center space-y-10'>
                  <div className='flex flex-col items-center'>
                    <div className='bg-white rounded-full p-2'><img src={coinLists[i].image} className='w-20 h-20'></img></div>
                      <div className='text-3xl lg:text-5xl font-bold text-white'>{coinLists[i].symbol.toUpperCase()}</div>
                  </div>
                  <button className='w-10 h-10 text-black bg-white rounded-full flex justify-center items-center transition delay-[40] hover:bg-red-500 hover:text-white'><BsHeart/></button>
              </div>
              <button className='mr-5 w-10 h-10 bg-white rounded-full transition delay-[40] hover:bg-gray-400 hover:text-white z-10 relative flex justify-center items-center' onClick={()=>{getCoinData(nextId,1)}}>
                <BsArrowRightShort className='w-4 h-4'/>
              </button>
            </div>
          );

          chartContent = (
          <div className='w-full flex flex-col lg:grid lg:grid-cols-4'>
              <div className='col-span-3 p-10'>
                <div className='text-2xl lg:text-5xl text-center font-bold lg:text-left'>{"$" + coinLists[i].market_cap.toLocaleString()}</div>
                <div className='flex py-4 md:space-x-10 font-bold'>
                  {searchState == 1?
                      (<button className='px-4 py-2 bg-purple-500 text-white rounded-lg' onClick={()=>{getCoinData(currentId, 1)}}>Today</button>):
                      (<button className='px-4 py-2 text-gray-500 transition delay-[40] hover:bg-purple/100 hover:text-white rounded-lg' onClick={()=>{getCoinData(currentId, 1)}}>Today</button>)
                  }
                  {searchState == 7?
                      (<button className='px-4 py-2 bg-purple-500 text-white rounded-lg' onClick={()=>{getCoinData(currentId, 7)}}>7 days</button>):
                      (<button className='px-4 py-2 text-gray-500 transition delay-[40] hover:bg-purple/100 hover:text-white rounded-lg' onClick={()=>{getCoinData(currentId, 7)}}>7 days</button>)
                  }
                  {searchState == 14?
                      (<button className='px-4 py-2 bg-purple-500 text-white rounded-lg' onClick={()=>{getCoinData(currentId, 14)}}>14 days</button>):
                      (<button className='px-4 py-2 text-gray-500 transition delay-[40] hover:bg-purple/100 hover:text-white rounded-lg' onClick={()=>{getCoinData(currentId, 14)}}>14 days</button>)
                  }
                  {coinLists[i].market_cap_change_24h<0?
                    (<div className='mt-4 px-3 py-2 w-20 bg-[#D8494A] text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate'></img>
                        <div className='font-bold text-white text-sm'>{coinLists[i].market_cap_change_percentage_24h.toFixed(2)+"%"}</div>
                    </div>):
                    (<div className='mt-4 px-3 py-2 w-20  bg-teal-500 text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate-180'></img>
                        <div className='font-bold text-white text-sm'>{coinLists[i].market_cap_change_percentage_24h.toFixed(2)+"%"}</div>
                    </div>)}
                </div>
                <LineChart historicalData={historicalData}></LineChart>
                <div className='flex flex-row space-x-2 w-full justify-center'>
                  {starContent}
                </div>
              </div>
              <div className='col-span-1 p-10'>
                <button className='px-5 py-2 bg-purple-600 text-white text-lg rounded-lg w-full hover:bg-purple-800' onClick={()=>{setShowModalFlag(true)}}>Buy Mong</button>
              </div>
          </div>);

          modalContent = (
            <div className='fixed top-0 w-full h-full z-30 flex justify-center transition delay-[40]'>
              <div className='w-full h-full bg-black/30 ' onClick={()=>{setShowModalFlag(false)}}></div>
              <div id="buyModal" className='animate-bounce absolute bottom-0 transition delay-[40] w-full bg-violet-900 px-10 py-4 rounded-none lg:rounded-2xl flex flex-col space-y-2 z-40'>
                <div className='flex justify-between font-bold text-2xl text-white'><span>BUY</span><span>SELL</span></div>
                <div className='bg-gray-500/50 w-full rounded-xl flex flex-col items-center space-y-4 p-4'>
                    <div className='bg-white rounded-full p-2 -mt-10'><img src={coinLists[i].image} className='w-14 h-14'></img></div>
                    <div className='text-white font-bold text-lg lg:text-xl'>INVEST</div>
                    <div className='text-white font-bold text-xl lg:text-4xl'>100$</div>
                    <div className='text-white font-bold text-lg lg:text-xl'>RECEIVE</div>
                    <div className='text-white font-bold text-xl lg:text-4xl'>12,323,442</div>
                    <div className='text-gray-400 font-bold text-sm lg:text-md'>2% FIXED FEE INCLUDING SLIPPAGE</div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='col-span-1 bg-gray-500/50 font-bold text-white text-xl lg:text-4xl py-5 rounded-xl transition delay-[40] hover:bg-purple-500 cursor-pointer'>
                      50$
                  </div>
                  <div className='col-span-1 bg-gray-500/50 font-bold text-white text-xl lg:text-4xl py-5 rounded-xl transition delay-[40] hover:bg-purple-500 cursor-pointer'>
                      100$
                  </div>
                  <div className='col-span-1 bg-gray-500/50 font-bold text-white text-xl lg:text-4xl py-5 rounded-xl transition delay-[40] hover:bg-purple-500 cursor-pointer'>
                      250$
                  </div>
                  <div className='col-span-1 bg-gray-500/50 font-bold text-white text-xl lg:text-4xl py-5 rounded-xl transition delay-[40] hover:bg-purple-500 cursor-pointer'>
                      1000$
                  </div>
                </div>
                <div className='w-full'>
                  <button className='px-5 py-2 bg-purple-600 text-white text-lg rounded-lg w-full hover:bg-purple-500' onCLick={onButtonClick}>Buy Mong</button>
                </div>
              </div>
            </div>
          );
        }
      }
    }
    console.log(showModalFlag);
    return (
      <div className="w-[100vw] relative">
         <div className='hidden py-6 bg-violet-700 lg:flex lg:flex-col justify-center items-center gap-4'>
            <div className='text-2xl text-white font-bold flex gap-2 items-end'><div>Meme</div><img src={heart} className='w-6 h-6'></img><div>Match</div></div>
         </div>
         {captionContent}
         {chartContent}
         {showModalFlag==true?modalContent:""}
      </div>
    );
  }
  
  export default CoinOverview;
