import '../../assets/css/Roadmap.css'

function Roadmap() {
  return (
    <section className="lg:w-[900px] xl:w-[1100px] relative flex flex-col justify-center items-center"   data-aos="zoom-in" data-aos-duration='100' data-aos-delay='300'>
      <div className="roadmap-content py-8 px-14 md:py-16 md:px-28 bg-maincolor">
        <div className="roadmap-design-1 -skew-x-12 hidden md:block"></div>
        <div className="roadmap-design-2 skew-x-12 hidden md:block"></div>
        <div className="text-white font-bold text-4xl lg:text-5xl">Our Roadmap</div>
        <div>
        <div className="pc-roadmap roadmap-bar grid grid-cols-5 mt-10">
          <div className="roadmap-complete-bar"></div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-4 h-4 bg-white rounded-full"></div>
            <div className="text-lg text-white font-bold mt-4">
              Feb 14, 2023
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-4 h-4 bg-white rounded-full"></div>
            <div className="text-lg text-white font-bold mt-4">
              Feb 15, 2023
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-4 h-4 bg-white opacity-60 rounded-full"></div>
            <div className="text-lg text-white  font-bold mt-4">Q3 2023</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-4 h-4 bg-white opacity-60 rounded-full"></div>
            <div className="text-lg text-white font-bold mt-4">Q1 2024</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-4 h-4 bg-white opacity-60 rounded-full"></div>
            <div className="text-lg text-white font-bold mt-4">Q1 2024</div>
          </div>
        </div>
        <div className="pc-roadmap roadmap-content-bar grid grid-cols-5 mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg text-white mt-4">deploy MMM</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg text-white mt-4">Private Sale</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg text-white mt-4">Blockchain Testnet</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg text-white mt-4">Security Audits</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg text-white mt-4">
              Exchange Official Launch
            </div>
          </div>
        </div>
        <div className="mobile-roadmap flex flex-col justify-center items-center mt-4">
          <div className="mobile-roadmap-timeline border-left border-white border-opacity-60 border-l-4 h-32 flex flex-row items-center">
          <div className='mobile-roadmap-complete-bar'></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="roadmap-item-content p-5 flex flex-col">
              <div className="flex flex-col">
                <div className="text-lg text-white font-bold mt-4 text-left">Feb 14, 2023</div>
                <div className="text-lg text-white mt-4">Deploy MMM</div>
              </div>
            </div>
          </div>
          <div className="mobile-roadmap-timeline border-left border-white border-opacity-60 border-l-4 h-32 flex flex-row items-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="roadmap-item-content p-5 flex flex-col">
              <div className="flex flex-col">
                <div className="text-lg text-white font-bold mt-4 text-left">Feb 15, 2023</div>
                <div className="text-lg text-white mt-4 text-left">Private Sale</div>
              </div>
            </div>
          </div>
          <div className="mobile-roadmap-timeline border-left border-white border-opacity-60 border-l-4 h-32 flex flex-row items-center">
            <div className="w-4 h-4 bg-white opacity-60 rounded-full"></div>
            <div className="roadmap-item-content p-5 flex flex-col">
              <div className="flex flex-col">
                <div className="text-lg text-white opacity-60 font-bold mt-4 text-left">Q3 2023</div>
                <div className="text-lg text-white opacity-60 mt-4">Blockchain Testnet</div>
              </div>
            </div>
          </div>
          <div className="mobile-roadmap-timeline border-left border-white border-opacity-60 border-l-4 h-32 flex flex-row items-center">
            <div className="w-4 h-4 bg-white opacity-60 rounded-full"></div>
            <div className="roadmap-item-content p-5 flex flex-col">
              <div className="flex flex-col">
                <div className="text-lg text-white opacity-60 font-bold mt-4 text-left">Q1 2024</div>
                <div className="text-lg text-white opacity-60 mt-4">Security Audits</div>
              </div>
            </div>
          </div>

          <div className="mobile-roadmap-timeline border-left border-white border-opacity-60 border-l-4 h-32 flex flex-row items-center">
            <div className="w-4 h-4 bg-white opacity-60 rounded-full"></div>
            <div className="roadmap-item-content p-5 flex flex-col text-left">
              <div className="flex flex-col">
                <div className="text-lg text-white opacity-60 font-bold mt-4 text-left">Q1 2024</div>
                <div className="text-lg text-white opacity-60 mt-4">Exchange Official Launch</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-lg opacity-60 mt-20">
          Demo accounts will be <br />
          available for platform testing.
        </div>
      </div>
      </div>
    </section>
  );
}

export default Roadmap;