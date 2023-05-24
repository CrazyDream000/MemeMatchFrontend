import React from 'react'
import Landing from '../layout/MemeLanding/Landing';
import Tokenomics from '../layout/MemeLanding/MarketingCap';
import MarketingCap from '../layout/MemeLanding/Tokenomics';
import RewardPost from '../layout/MemeLanding/RewardPost';
import AboutTeam from '../layout/MemeLanding/AboutTeam';
import StayUpdated from '../layout/MemeLanding/StayUpdated';
import Roadmap from '../layout/MemeLanding/Roadmap';
import Navbar from '../layout/MemeLanding/Navbar';
import Footer from '../layout/MemeLanding/Footer';
function MemeLanding() {
    return (
        <div>
          <Navbar />
          <Landing />
          <div className="overflow-hidden relative w-full flex flex-col justify-center bg-white z-20 py-10 items-center">
            <Tokenomics/>
            <RewardPost/>
            <MarketingCap/>
            <Roadmap/>
            <AboutTeam/>
            <StayUpdated/>
          </div>

          <Footer />
        </div>
    );
  }
  
  export default MemeLanding;
