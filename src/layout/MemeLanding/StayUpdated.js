import DonutChart from "../../component/DonutChart.js"
import cofounderPic from "../../assets/img/cofounder.jpg"
import developerPic from "../../assets/img/developer.png"
function StayUpdated() {
    return (
        <section className="w-[90%] lg:w-[1000px] flex flex-col justify-center items-center px-10 py-20 space-y-10 bg-maincolor rounded-xl relative overflow-hidden"  data-aos="zoom-out" data-aos-duration='200' data-aos-delay='300'>
            <div className="block4 absolute top-0 left-1/3 skew-x-12 hidden lg:block"></div>
            <div className="block5 absolute bottom-0 right-20 skew-x-12 hidden lg:block"></div>
            <div className="block3 absolute -top-32 left-0 rounded-full z-[5] w-full lg:w-[537px]"></div>
            <span className="text-white text-4xl font-bold text-center">Stay updated on the latest news of the project</span>
            <div className="w-[100%] md:w-[600px] relative z-10">
                <input className="w-full bg-blue-400 bg-opacity-10 border-2 border-blue-200 border-opacity-10 rounded-full text-white p-4 text-md md:text-lg"></input>
                <button className="absolute right-[2px] md:right-1 h-14 top-[2px] md:top-1 bg-blue-500 px-4 py-2 rounded-full transition duration-[10] hover:bg-blue-400">
                    <span className="text-white text-xl flex"><span className="hidden md:block">Subscribe </span><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 md:h-8 w-6 md:w-8">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
  }
  
  export default StayUpdated;
