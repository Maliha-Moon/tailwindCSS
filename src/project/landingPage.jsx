import React from "react";
import reactLogo from "../assets/react.svg";

const LandingPage = () => {
  return (
    <>
      <nav className="bg-purple-900 text-white flex justify-between">
        <img src={reactLogo} className="px-2" />
        <ul className="px-28 py-4 flex space-x-11 justify-end">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Catalogue</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>
      {/* hero section */}
      <main className="bg-fuchsia-100  flex justify-around">
        <div className="h-96 py-20 pl-10">
          <div className="text-6xl ">Learn React</div>
          <p className="py-4 w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            similique modi est perspiciatis excepturi ab assumenda rerum nam,
            reiciendis optio amet, consequuntur itaque odit laboriosam ducimus!
            Neque incidunt quod assumenda!
          </p>
          <div>
            <button className="bg-purple-900 px-4 py-3 mx-2 rounded-2xl text-white cursor-pointer hover:text-slate-900 hover:bg-purple-400">
              Go to Course
            </button>
            <button className="bg-purple-900 px-4 py-3 mx-2 rounded-2xl text-white cursor-pointer hover:text-slate-900 hover:bg-purple-400">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="flex item-center">
          <img src={reactLogo} className="w-100 pr-10" />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
