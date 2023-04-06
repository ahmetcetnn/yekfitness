import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
    <Navbar/>
    <section className="h-64 md:h-96  lg:h-144 group relative">
        {/* Hero Image */}
        <img
          src="https://blog.n11.com/wp-content/uploads/2015/09/fitness-nedir-ne-ise-yarar-800x461.jpg"
          alt="main photo"
          className="h-full w-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
          {/* Hero content container */}
          <div className="container">
            
            <h1 className=" text-3xl lg:text-5xl text-white group-hover:mb-1 duration-500 ">
            START YOUR NEW LIFE 
            </h1>
            <p className="text-white group-hover:mb-2 duration-500 w-3/4 text-sm lg:text-base lg:w-2/3">
            "Fitness is not about being better than someone else. It's about
            being better than you used to be."
            </p>
            {/* detail container */}
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-15 duration-1000 ">
              {/* watch */}
              
              {/* INFO */}
              <div className="flex space-x-2 items-center cursor-pointer ">
                <button className="text-gray-100 uppercase w-32 border-solid bg-opacity-5 md:text-xs lg:text-lg hover:text-red-600 duratin-500">
                <Link to ="/exercise"> start now </Link> 
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Movies section */}
      <section className="py-10 bg-black  ">
        {/* Movies content */}
        <div className=" lg:flex sm:flex-row lg:ml-10 lg:space-x-8 sm:h-2/3">
          {/* sol taraf */}
          {/* titles */}

          <div className=" lg:basis-4/6 sm:basis-1/3 ">
            {/* images container */}
            <div className="flex flex-wrap ">
              {/* image 1 */}
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://iphoneswallpapers.com/wp-content/uploads/2018/07/Aquaman-HD-iPhone-Wallpaper.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">
                    AQUAMAN
                  </h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, sunt.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://wallpapercave.com/wp/wp6875764.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">
                    FLASH
                  </h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, sunt.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://w0.peakpx.com/wallpaper/729/654/HD-wallpaper-hugh-jackman-comics-logan-marvel-mutant-wolverine-x-men-thumbnail.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">
                    WOLVERINE
                  </h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, sunt.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://w0.peakpx.com/wallpaper/959/836/HD-wallpaper-captain-america-avenger-shield-steve-rogers.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50"
                />
                {/* image detail container */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">
                    CAPTAIN AMERICA
                  </h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, sunt.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg"
                  alt="logo"
                  className="group-hover:scale-110 group:hover:opacity-50 "
                />
                {/* image detail container */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">
                    SPIDERMAN
                  </h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, sunt.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden basis-1/3">
                <img
                  src="https://r1.ilikewallpaper.net/iphone-wallpapers/download-108622/justice-league-zack-superman-black-suit-4k.jpg"
                  alt="logo"
                  className="group-hover:scale-110 duration-200 group:hover:opacity-50"
                />
                {/* image detail container */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-200 group-hover:text-gray-400 group-hover:mb-2">
                    SUPERMAN
                  </h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 grouo-hover:mb-10 duration-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* sag taraf */}
          <div className="basis1/3 text-slate-400 flex flex-col">
            <div className=" lg:my-72 sm:mt-64">
            <h2 className="lg:text-3xl md:text-xl sm:text-base text-center justify-center  whitespace-pre-wrap ">
              You won't find an unhealthy, 
            </h2>
            <h2 className="lg:text-3xl md:text-xl sm:text-base text-center justify-center whitespace-pre-wrap ">
            skinny superhero in any comic book.
            </h2>
            <h1 className="lg:text-6xl md:text-3xl sm:text-lg text-center  items-center justify-center ">
              Be Your Own Hero!
            </h1>
            <h2 className="lg:text-3xl md:text-xl sm:text-base text-center justify-center  whitespace-pre-wrap ">
            You can use your power to rescue kittens from a tree
            </h2>
            <h2 className="lg:text-3xl md:text-xl sm:text-base text-center justify-center whitespace-pre-wrap ">
            NOT TO STOP BULLETS!
            </h2>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-white">
        <ul className="flex flex-row justify-around uppercase">
          <li>twitter</li>
          <li>github</li>
          <li>linkedin</li>
        </ul>
      </footer>
    </>
  );
}

export default Homepage;
