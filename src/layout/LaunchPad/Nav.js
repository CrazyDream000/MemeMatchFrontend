import logo from "../../assets/img/mmmlogo.png"
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div className="w-full flex justify-between px-5 py-10 md:px-20 ">
      <div className="logo flex space-x-2">
        <span className="text-white text-2xl sm:text-4xl font-bold">Meme</span>
        <img src={logo} className="w-8 lg:w-12"></img>
        <span className="text-white text-2xl sm:text-4xl font-bold">Match</span>
      </div>
      <div className=" text-xl flex space-x-3">
        <Link to="" className="text-white border-b-2 border-b-yellow-500/0 rounded-full transition delay-75 px-5 py-2 -mt-0 hover:border-b-yellow-500/100 hover:text-yellow-400">
          Swap
        </Link>
        <Link to="" className="text-white border-b-2 border-b-yellow-500/0 rounded-full transition delay-75 px-5 py-2 -mt-0 hover:border-b-yellow-500/100 hover:text-yellow-400">
          Staking
        </Link>
        <Link to="" className="text-white border-b-2 border-b-yellow-500/0 rounded-full transition delay-75 px-5 py-2 -mt-0 hover:border-b-yellow-500/100 hover:text-yellow-400">
          Farm
        </Link>
      </div>
      <div>
        <button className="px-5 py-2 text-lg rounded-full bg-teal-500 text-white transition delay-[30] hover:bg-teal-400">
            Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Nav;
