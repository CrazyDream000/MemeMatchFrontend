import DonutChart from "../../component/DonutChart.js"

function Tokenomics() {
    return (
        <section className="w-full lg:w-[1200px] flex flex-col justify-center py-32 lg:py-48 space-y-10">
            <span className="text-2xl md:text-4xl text-center font-bold">Token Economics</span>
            <div className="flex flex-col sm:flex-row justify-center">
                <div className="w-full sm:w-1/2" data-aos="fade-right" data-aos-duration='200'>
                    <DonutChart/>
                </div>
                <div className="w-full sm:w-1/2 p-10 flex-col space-y-4">
                    <div className="flex flex-col space-y-2" data-aos="fade-left" data-aos-duration='200'>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span>Burned after private sale</span>
                            </div>
                            <div>
                                43%
                            </div>
                        </div>
                        <div className=" relative">
                            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                            <div className="absolute left-0 top-0 w-[43%] h-2 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2"  data-aos="fade-left" data-aos-duration='200' data-aos-delay='200'>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span>Initial Liquidity Pool</span>
                            </div>
                            <div>
                                20%
                            </div>
                        </div>
                        <div className=" relative">
                            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                            <div className="absolute left-0 top-0 w-[20%] h-2 bg-green-400 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2" data-aos="fade-left" data-aos-duration='200' data-aos-delay='400'>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <span>Private Sale</span>
                            </div>
                            <div>
                                15%
                            </div>
                        </div>
                        <div className=" relative">
                            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                            <div className="absolute left-0 top-0 w-[43%] h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2" data-aos="fade-left" data-aos-duration='200' data-aos-delay='600'>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span>Later Liquidity Pool</span>
                            </div>
                            <div>
                                8%
                            </div>
                        </div>
                        <div className=" relative">
                            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                            <div className="absolute left-0 top-0 w-[8%] h-2 bg-red-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2" data-aos="fade-left" data-aos-duration='200' data-aos-delay='800'>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span>Marketing</span>
                            </div>
                            <div>
                                14%
                            </div>
                        </div>
                        <div className=" relative">
                            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                            <div className="absolute left-0 top-0 w-[14%] h-2 bg-purple-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
  }
  
  export default Tokenomics;

  