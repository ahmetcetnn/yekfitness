import React from "react";

function Homepage() {
  return (
    <div className=" mt-10 flex items-center ">
        <div className="w-1/3 text-black mt-32 ml-52">
            <h1 className="text-6xl">Start Your </h1> 
            <h1 className="text-6xl">New Life</h1>
            <p className="text-sm mt-8 ">"Fitness is not about being better than someone else. It's about being better than you used to be."</p>
            <button className="mt-8 mr-1 text-white border-solid bg-slate-600 w-36 rounded-sm">Get Started</button>
            <button className="ml-1 mt-8 text-white border-solid bg-slate-600 w-36 rounded-sm">Preview</button>
        </div>
      <div className="h-80 mt-36 ml-24 ">
        <img 
          src="https://blog.n11.com/wp-content/uploads/2015/09/fitness-nedir-ne-ise-yarar-800x461.jpg"
          alt="homepagephoto"
          className=" w-72 lg:w-128 rounded-xl "
        />
      </div>
    </div>
  );
}

export default Homepage;
