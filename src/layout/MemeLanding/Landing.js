import "../../assets/css/landing.css"
import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
  return (
    <div className="relative w-full flex justify-center bg-maincolor ">
        <div className="block1 absolute -top-32 left-20 skew-x-12 hidden lg:block"></div>
        <div className="block2 absolute bottom-0 right-20 skew-x-12 hidden lg:block"></div>
        <div className="block3 absolute -top-32 left-0 rounded-full z-[5] w-full lg:w-[537px]"></div>
        <div className="w-container flex justify-center items-center z-10">
            <section className="py-20 md:py-40">
                <div className="px-5 space-y-10 w-full md:w-landing ">
                    <div className="flex justify-center w-full"><span className="bg-blue-100 text-blue-600 tracking-widest uppercase rounded-full px-4 py-2 text-xs font-bold leading-5">$MMM - FIND&nbsp;AND&nbsp;BUY&nbsp;MEMES&nbsp;YOU&nbsp;LOVE</span></div>
                    <h1 className="text-gray-100 tracking-tighter mt-0 mb-0 text-6xl font-bold leading-tight text-center">My ❤️ Meme Match 🚀</h1>
                    <p className="text-xl leading-relaxed text-center text-gray-300">You need to know someone that knows someone to buy the $MMM token. Chad VIPS only. Join our telegram to learn mow</p>
                    <div className="flex flex-wrap p-5 justify-center md:space-x-10 ">
                      <Link to='/app' className="mt-2 bg-blue-500 rounded-full w-48 h-12 transition duration-75 flex justify-center items-center space-x-1 hover:bg-blue-400">
                        <span className=" text-white font-bold text-lg lg:text-xl">
                          LaunchPad
                        </span>
                      </Link>
                      <button className="border-2 mt-2  border-blue-500 rounded-full w-48 h-12 transition duration-75 text-blue-600 bg-white hover:bg-blue-400 hover:text-white">
                        <span className=" font-bold text-lg lg:text-xl">Learn more</span>
                      </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default Landing;