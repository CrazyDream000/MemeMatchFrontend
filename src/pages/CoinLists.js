import React,  { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {BsEye} from 'react-icons/bs'
import {BounceLoader} from 'react-spinners'
function CoinLists() {
    const Background1 = require('../assets/img/tokens/back1.png');
    const downPic = require('../assets/img/tokens/down.png');
    const heart = require('../assets/img/tokens/Vector.png');
    
    const [isLoading, setIsLoading] = useState(false);
    const [coinLists, setCoinLists] = useState(null);
    const [sortType, setSortType] = useState(1);
    const [sortDown, setSortDown] = useState(true);
    useEffect(() => {
        // This code will be executed only once, similar to componentDidMount
        //this.interval = setInterval (() => this. fetchCurrencyData (), 60 *1000)

        fetchData();

        return () => {
          // This code will be executed just before unmounting the component, similar to componentWillUnmount
        };
    }, []); 
       
    const fetchData = async () => {
        setIsLoading(true);
        const result = await axios.get(
            `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h&locale=en&x_cg_pro_api_key=CG-cYLMAXA7qqWnK5RXS8WAw5Jk`,
        );
        setCoinLists(result.data);
        setIsLoading(false);
    };
    let coinlistsTable = [];
    let sortContent = [];
    if(coinLists != undefined)
    {
        coinlistsTable = coinLists.map((item)=>(
        <Link to={`/coinoverview/${item.id}`} className='col-span-1 relative cursor-pointer'>
            <div className='w-full relative'>
                <div className='absolute w-full h-full  rounded-xl transition deplay-[40] bg-black/30 opacity-0 hover:opacity-100 z-20 flex justify-center items-center'>
                    <BsEye className="text-white w-10 h-10"></BsEye>
                </div>
                <img className="w-full" src={Background1}></img>
            </div>
            <div className='absolute left-0 top-5 w-[100%] px-8 flex flex-row justify-between'>
                <img className='w-[25%] h-full' src={item.image}></img>
                <div className='flex flex-col'>
                    <div className='font-bold text-white text-3xl'>{(item.market_cap/1000000).toFixed(2) + "M"}</div>
                    {item.market_cap_change_24h<0?
                    (<div className='mt-4 px-3 py-2 w-20 bg-[#D8494A] text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate'></img>
                        <div className='font-bold text-white text-sm'>{item.market_cap_change_percentage_24h.toFixed(2)+"%"}</div>
                    </div>):
                    (<div className='mt-4 px-3 py-2 w-20  bg-teal-500 text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                        <img src={downPic} className='w-2 h-2 rotate-180'></img>
                        <div className='font-bold text-white text-sm'>{item.market_cap_change_percentage_24h.toFixed(2)+"%"}</div>
                    </div>)}
                </div>
            </div>
            <div className='absolute left-0 bottom-8 w-[100%] px-8 flex flex-row justify-start items-start'>
                <div className='font-bold text-3xl text-white text-left'>{item.symbol.toUpperCase()}<br/>{item.name}</div>
            </div>
        </Link>
        ));
    }
    return (
      <div className="h-[100vh] w-[100vw]">
        {isLoading?(<div className='w-full h-[100vh] flex justify-center items-center'><BounceLoader className='self-center' color="#36d7b7"/></div>):(
            <div className='h-[100vh] w-[100vw] overflow-hidden'>
                <div className='py-6 lg:py-[90px] bg-violet-700 flex flex-col justify-center items-center gap-4'>
                    <div className='text-2xl lg:text-5xl text-white font-bold flex gap-2 lg:gap-4 items-end'><div>Meme</div><img src={heart} className='w-6 h-6 lg:w-full lg:h-full'></img><div>Match</div></div>
                    <div className='hidden lg:block text-xl text-white font-bold'>Somthing about meme match here </div>
                </div>
                <div className='w-full flex justify-center p-10'>
                    <div className='bg-gray-100 border-2 border-gray-200/80 rounded-full flex'>
                        {(sortType==1)?(<div className='px-6 py-3 flex items-center text-lg rounded-full bg-violet-700 text-white gap-1 cursor-pointer' onClick={()=>{setSortDown(!sortDown)}}>
                        Price {sortDown?(<img src={downPic} className='w-[10px] h-[10px]'></img>):(<img src={downPic} className='rotate-180 w-[10px] h-[10px]'></img>)}
                        </div>):(<div className='px-6 py-3 flex items-center text-lg rounded-full text-gray-400 cursor-pointer' onClick={()=>{setSortType(1)}}>Price</div>)}

                        {(sortType==2)?(<div className='px-6 py-3 flex items-center text-lg rounded-full bg-violet-700 text-white gap-1 cursor-pointer' onClick={()=>{setSortDown(!sortDown)}}>
                        Age {sortDown?(<img src={downPic} className='w-[10px] h-[10px]'></img>):(<img src={downPic} className='rotate-180 w-[10px] h-[10px]'></img>)}
                        </div>):(<div className='px-6 py-3 flex items-center text-lg rounded-full text-gray-400 cursor-pointer' onClick={()=>{setSortType(2)}}>Age</div>)}

                        {(sortType==3)?(<div className='px-6 py-3 flex items-center text-lg rounded-full bg-violet-700 text-white gap-1 cursor-pointer' onClick={()=>{setSortDown(!sortDown)}}>
                        Rating {sortDown?(<img src={downPic} className='w-[10px] h-[10px]'></img>):(<img src={downPic} className='rotate-180 w-[10px] h-[10px]'></img>)}
                        </div>):(<div className='px-6 py-3 flex items-center text-lg rounded-full text-gray-400 cursor-pointer' onClick={()=>{setSortType(3)}}>Rating</div>)}
                    </div>
                </div>         
                <div className='w-[103vw] lg:w-[101vw] h-3/4 lg:h-1/2 overflow-y-auto'>
                    <div className=' flex justify-center pl-2 pr-4 md:pl-2 md:pr-8 lg:pr-4'>
                        <div className='grid grid-cols-1 w-[425px] md:grid-cols-2 md:w-[768px] lg:grid-cols-3 lg:w-[1024px] xl:grid-cols-4 xl:w-[1360px] gap-2'>
                            {coinlistsTable}
                        </div>
                    </div>
                </div>
            </div>
        )}
         
      </div>
    );
  }
  
  export default CoinLists;
