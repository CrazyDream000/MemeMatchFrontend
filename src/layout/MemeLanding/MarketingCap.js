function MarketingCap() {
    return (
        <section className="w-full lg:w-[1200px] flex flex-col justify-center items-center py-32 space-y-10" >
            <div className="text-xl lg:text-4xl  text-blue-600 font-bold"  data-aos="fade-up" data-aos-duration='100' data-aos-delay='0'>MMM Token Address</div>
            <div className="text-lg lg:text-2xl text-gray-400"  data-aos="fade-up" data-aos-duration='100' data-aos-delay='100'>0x000000000000000000000</div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-10 md:space-y-0 "  data-aos="fade-up" data-aos-duration='100' data-aos-delay='200'>
                <div className="w-full lg:w-96 h-60 border-2 p-2 border-blue-400 rounded-xl flex flex-col justify-center space-y-8">
                    <span className="text-center text-blue-600 font-bold text-2xl">TOTAL VALUE LOCKED</span>
                    <span className="text-center text-blue-400 text-xl">$39,197,220</span>
                </div>
                <div className="w-full lg:w-96 h-60 border-2 p-2 border-blue-400 rounded-xl flex flex-col justify-center space-y-8">
                    <span className="text-center text-blue-600 font-bold text-2xl">TOTAL TRADING VOLUME</span>
                    <span className="text-center text-blue-400  text-xl">$39,197,220</span>
                </div>
            </div>
        </section>
    );
  }
  
  export default MarketingCap;
