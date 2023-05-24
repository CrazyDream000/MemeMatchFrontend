
function RewardPost() {
    return (
        <section className=" bg-maincolor w-full flex flex-col space-y-5 sm:flex-row sm:space-x-10 items-center justify-center p-10 lg:px-40 relative overflow-hidden">
            <div className="block3 absolute -top-32 left-0 rounded-full z-[5] w-full lg:w-[537px]"></div>
            <div className="flex flex-col space-y-6">
                <span className="text-center text-2xl lg:text-left lg:text-6xl font-bold text-white"  data-aos="fade-right" data-aos-duration='100' data-aos-delay='0'>Anyone can get rich here</span>
                <span className="text-center text-4xl lg:text-left lg:text-8xl font-bold text-white"  data-aos="fade-right" data-aos-duration='100' data-aos-delay='100'>1% <span className="text-4xl lg:text-8xl font-bold text-gray-300">of buys</span></span>
                <span className="text-center text-xl lg:text-left lg:text-2xl text-gray-200"  data-aos="fade-right" data-aos-duration='100' data-aos-delay='200'>Inivite 100s of friends to join by sending them a single $MMM token. Every time they buy you receive 1% reward</span>
            </div>
            <div className=""  data-aos="flip-right" data-aos-duration='100' data-aos-delay='0'>
                <img src="https://uploads-ssl.webflow.com/644b7f4dc7d4263aadc0af5f/644b7f4ec7d4264094c0b0af_Front_Phone.png" loading="eager" alt="" class="relative fade-in" data-xblocker="passed" />
            </div>
        </section>
    );
  }
  
  export default RewardPost;
