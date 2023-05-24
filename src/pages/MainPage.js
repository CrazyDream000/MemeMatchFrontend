import React from 'react'
import {Link} from 'react-router-dom'

function MainPage() {
    return (
      <div className=" bg-violet-700 h-[100vh] px-12 flex flex-col items-center justify-center space-y-10">
         <div className='text-7xl text-white font-bold'>
            MeMe Match
         </div>
         <div className='text-lg text-white'>
            This is the best place to find and invest in established meme tokens to follow or invest in.
         </div>
         <div className=' text-white text-lg p-5 w-60 flex-col flex space-y-4'>
            <div className='flex items-center space-x-4'> <div className='w-4 h-4 bg-white rounded-full'></div><span className=''>Active communities</span></div>
            <div className='flex items-center space-x-4'> <div className='w-4 h-4 bg-white rounded-full'></div><span className=''>Locked liquidity</span></div>
            <div className='flex items-center space-x-4'> <div className='w-4 h-4 bg-white rounded-full'></div><span className=''>Contracts renounced</span></div>
         </div>
         <div className=''>
            <Link to="/coinlists" className='px-10 py-4 bg-white rounded-lg transition delay-[30] border-2 border-bg-violet-800/0 hover:bg-violet-800 hover:text-white hover:border-bg-violet-800/100 active:bg-white'>Enter | Register in future</Link>
         </div>
        <div className='text-white text-lg'>
           By entering i agree to terms & conditions
        </div>
      </div>
    );
  }
  
  export default MainPage;
