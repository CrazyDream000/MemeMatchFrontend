import logo from "../../assets/img/mmmlogo.png"

function Navbar() {
  return (
    <div className="top-0 w-full flex justify-center border-b-2 border-gray-400 border-opacity-25 h-32 px-4 bg-maincolor z-10">
        <div className="w-container flex justify-between items-center xl:w-[1300px]">
          <div className="logo flex space-x-2">
            <span className="text-white text-2xl sm:text-4xl font-bold">Meme</span>
            <img src={logo} className="w-8 lg:w-12"></img>
            <span className="text-white text-2xl sm:text-4xl font-bold">Match</span>
          </div>
          <div className="">
             <a  href="https://app.uniswap.org/#/swap"  target="_blank" className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold h-10 transition duration-75 hover:bg-blue-300 cursor-pointer">Exchange</a>
          </div>
        </div>
    </div>
  );
}

export default Navbar;