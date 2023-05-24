import logo from "../../assets/img/mmmlogo.png"
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="top-0 w-full flex flex-col justify-center border-b-2 border-gray-400 border-opacity-25 px-10 py-10 bg-maincolor z-10">
        <div className="flex xl:w-[1300px] justify-between items-center flex-col md:flex-row">
           <div className="flex flex-col w-[375px] p-8 space-y-4  items-center"  data-aos="fade-right" data-aos-duration='200' data-aos-delay='400'>
              <div className="logo flex space-x-2">
                <span className="text-white text-2xl sm:text-4xl font-bold">Meme</span>
                <img src={logo} className="w-8 lg:w-12"></img>
                <span className="text-white text-2xl sm:text-4xl font-bold">Match</span>
              </div>
              <div className="flex flex-col text-gray-400 ">
                {/* <span>After we have released  the Meme Match app the second phase will include private sales and early access to new tokens we list</span> */}
                <span className="text-center md:text-left">Meme Match is a simple and safe place to discover meme tokens</span>
                <span className="text-center md:text-left">No more copying contracts or checking honey pots</span>
                <span className="text-center md:text-left">A fun and simple tinder style swipe left and right lets you find the memes you love and invest what you can afford</span>
              </div>
           </div>
           <div className="p-8"  data-aos="fade-left" data-aos-duration='200' data-aos-delay='400'>
              <span className="text-white text-2xl font-bold">Useful Links</span>
              <div className="text-white flex font-bold space-x-6 mt-4">
                <div className="flex flex-col text-xl space-y-4">
                  <span>Product</span>
                  <span>Home</span>
                  <span>Features</span>
                  <span>Pricing</span>
                  <span>About</span>
                </div>
                <div className="flex flex-col text-xl space-y-4">
                  <span>Company</span>
                  <span>Blog</span>
                  <span>Careers</span>
                  <span>Contact</span>
                  <span>Utilities</span>
                </div>
                <div className="flex flex-col text-xl space-y-4">
                  <span>Other</span>
                  <span>Saasable</span>
                  <span>Saascot</span>
                  <span>Saamurai</span>
                  <span>Flowyak</span>
                </div>
              </div>
           </div>
        </div>
        <div className="border-t-2 border-gray-400 flex p-4 justify-between">
           <div className="text-gray-300">Designed and developed by Ryan Jacks</div>
           <div className="text-gray-300 flex space-x-2">
            <SocialIcon url="https://t.me/" network="telegram"/>
            <SocialIcon url="https://t.me/" network="instagram"/>
            </div>
        </div>
    </div>
  );
}

export default Footer;