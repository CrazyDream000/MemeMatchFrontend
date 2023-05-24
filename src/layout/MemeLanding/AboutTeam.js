import cofounderPic from "../../assets/img/cofounder.jpg"
import developerPic from "../../assets/img/developer.png"
function AboutTeam() {
    return (
        <section className="w-full lg:w-[1200px] flex flex-col justify-center items-center py-20 space-y-10">
            <div className="text-xl lg:text-4xl font-bold"   data-aos="fade -up" data-aos-duration='200' data-aos-delay='200'>About Us</div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-10 md:space-y-0 ">
                <div className="w-full lg:w-[250px] border-2 p-2 border-gray-200 rounded-lg flex flex-col space-y-4 cursor-pointer bg-white transition delay-[30] hover:bg-blue-500 hover:text-white hover:shadow-xl"   data-aos="flip-left" data-aos-duration='200' data-aos-delay='400'>
                    <img src={cofounderPic} className="rounded-lg w-[240px]"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-center">Co-Founder</span>
                        <span className="text-md text-center">Jens Wikholm</span>
                    </div>
                </div>
                <div className="w-full lg:w-[250px] border-2 p-2 border-gray-200 rounded-lg flex flex-col space-y-4 cursor-pointer bg-white transition delay-[30] hover:bg-blue-500 hover:text-white hover:shadow-xl"   data-aos="flip-left" data-aos-duration='200' data-aos-delay='600'>
                    <img src={developerPic} className="rounded-lg w-[240px]"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-center">Blockchain Developer</span>
                        <span className="text-md text-center">Ryan Jacks</span>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default AboutTeam;
