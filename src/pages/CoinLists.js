import React,  { useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BsEye, BsSdCardFill} from 'react-icons/bs';
import {BounceLoader} from 'react-spinners';
import { LazyLoadImage } from "react-lazy-load-image-component";

import {db, storage,getTokenData} from '../firebase/firebase';
import {getDocs, collection, getDoc,} from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";

import back from "../assets/img/tokens/back1.png"
import 'react-lazy-load-image-component/src/effects/blur.css';
function CoinLists() {
    
    const downPic = require('../assets/img/tokens/down.png');
    const heart = require('../assets/img/tokens/Vector.png');
    
    const [isLoading, setIsLoading] = useState(true);
    const [coinLists, setCoinLists] = useState(undefined);
    const [sortType, setSortType] = useState("market_cap");
    const [sortDown, setSortDown] = useState(true);
    
    let coinlistsTable = [];

    useEffect(() => {
        fetchData(sortType, sortDown);
    }, [sortType, sortDown]);

    const fetchData = async (st, sd) => {
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
        setIsLoading(false);
    };
 
    function changeSortType(n){
        fetchData(n, sortDown)
        setSortType(n);
    }

    function changeSortDown(){
        fetchData(sortType,!sortDown);
        setSortDown(!sortDown);
    }

    if(coinLists != undefined)
    { 
        coinlistsTable = coinLists.map((item)=>(
            <Link to={`/coinoverview/${item.data.address}`} className='col-span-1 relative cursor-pointer animeFadeShow'>
                <div className='w-full relative'>
                    <div className='absolute w-full h-full  rounded-2xl transition deplay-[40] bg-black/30 opacity-0 hover:opacity-100 z-20 flex justify-center items-center'>
                        <BsEye className="text-white w-10 h-10"></BsEye>
                    </div>
                    <LazyLoadImage className="rounded-2xl" placeholderSrc={back} src={item.background_url} effect="blur"/>
                </div>
                <div className='absolute left-0 top-5 w-[100%] px-4 md:px-8 flex flex-row justify-between'>
                    <img className='w-[25%] h-full' src={item.logo_url}></img>
                    <div className='flex flex-col'>
                        <div className='font-bold text-white text-3xl'>${item.data.liquidity_usd>1000000?((item.liquidity_usd/1000000).toFixed(0) + "M"):(item.data.liquidity_usd.toFixed(2))}</div>
                        {item.price_24h_delta_usd<0?
                        (<div className='mt-4 px-3 py-2 w-20 bg-[#D8494A] text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                            <img src={downPic} className='w-2 h-2 rotate'></img>
                            <div className='font-bold text-white text-sm'>{item.data.price_24h_delta_usd.toFixed(2)+"%"}</div>
                        </div>):
                        (<div className='mt-4 px-3 py-2 w-20  bg-teal-500 text-white text-sm rounded-xl flex items-center space-x-1 self-end'>
                            <img src={downPic} className='w-2 h-2 rotate-180'></img>
                            <div className='font-bold text-white text-sm'>{item.data.price_24h_delta_usd.toFixed(2)+"%"}</div>
                        </div>)}
                    </div>
                </div>
                <div className='absolute left-0 bottom-8 w-[100%] px-4 md:px-8 flex flex-row justify-start items-start'>
                    <div className='font-bold text-3xl text-white text-left'>{item.symbol.toUpperCase()}<br/>{item.name}</div>
                </div>
            </Link>
        ));
    }
    return (
      <div className="h-[100vh] w-[100vw]">
        <div className='h-[100vh] w-[100vw] overflow-hidden'>
            <div className='py-6 lg:py-[50px] bg-violet-700 flex flex-col justify-center items-center gap-4'>
                <div className='text-2xl lg:text-5xl text-white font-bold flex gap-2 lg:gap-4 items-end'><div>Meme</div><img src={heart} className='w-6 h-6 lg:w-full lg:h-full'></img><div>Match</div></div>
                <div className='hidden lg:block text-xl text-white font-bold'>Somthing about meme match here </div>
            </div>
            <div className='h-[90%] overflow-y-scroll'>
                <div className='w-full flex justify-center p-5 lg:p-10'>
                    <div className='bg-gray-100 border-2 border-gray-200/80 rounded-full flex'>
                        {(sortType=="market_cap")?(<div className='px-6 py-3 flex items-center text-lg rounded-full bg-violet-700 text-white gap-1 cursor-pointer' onClick={changeSortDown}>
                        Price {sortDown?(<img src={downPic} className='w-[10px] h-[10px]'></img>):(<img src={downPic} className='rotate-180 w-[10px] h-[10px]'></img>)}
                        </div>):(<div className='px-6 py-3 flex items-center text-lg rounded-full text-gray-400 cursor-pointer' onClick={()=>changeSortType("market_cap")}>Price</div>)}

                        {(sortType=="price_change_percentage_24h")?(<div className='px-6 py-3 flex items-center text-lg rounded-full bg-violet-700 text-white gap-1 cursor-pointer' onClick={changeSortDown}>
                        Age {sortDown?(<img src={downPic} className='w-[10px] h-[10px]'></img>):(<img src={downPic} className='rotate-180 w-[10px] h-[10px]'></img>)}
                        </div>):(<div className='px-6 py-3 flex items-center text-lg rounded-full text-gray-400 cursor-pointer' onClick={()=>changeSortType("price_change_percentage_24h")}>Age</div>)}

                        {(sortType=="market_cap_rank")?(<div className='px-6 py-3 flex items-center text-lg rounded-full bg-violet-700 text-white gap-1 cursor-pointer' onClick={changeSortDown}>
                        Rating {sortDown?(<img src={downPic} className='w-[10px] h-[10px]'></img>):(<img src={downPic} className='rotate-180 w-[10px] h-[10px]'></img>)}
                        </div>):(<div className='px-6 py-3 flex items-center text-lg rounded-full text-gray-400 cursor-pointer' onClick={()=>changeSortType("market_cap_rank")}>Rating</div>)}
                    </div>
                </div>         
                <div className='w-full'>
                    <div className=' flex justify-center px-6 md:px-4 lg:px-6'>
                        {isLoading?(<div className='w-full mt-[200px] flex justify-center items-center'><BounceLoader className='self-center' color="#6D28D9"/></div>):(
                        <div className='grid grid-cols-1 w-[425px] md:grid-cols-2 md:w-[768px] lg:grid-cols-3 lg:w-[1024px] xl:grid-cols-4 xl:w-[1360px] gap-2'>{coinlistsTable}</div>)}
                    </div>
                </div>
            </div>
        </div>         
      </div>
    );
  }
  
  export default CoinLists;
