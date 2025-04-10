import React from "react";
import image from "../images/img1.jpg";
import Button from "./Button";

const Aboutme = () => {
  return (
    <section className="mt-20 mb-20 py-8 px-4 bg-gray-900 shadow-lg rounded-lg">
      <div className="flex flex-row flex-1 space-x-4">
        <div className="flex p-6 justify-center flex-1 ">
          <img
            className="m-auto rounded-full w-64 h-80 md:w-64 md:h-[370px]"
            src={image}
            alt="Logan"
          />
        </div>
        <div className="flex-1 py-4 px-6 space-y-4">
            <h2 className="text-3xl text-gray-400 font-bold">About <span style={{color: 'orangered'}}>Me</span></h2>
            <h1 className="text-4xl font-bold text-gray-400">Frontend Developer</h1>
            <p className="text-gray-400">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button 
                text='Experience'
                bg='bg-orange-600'
            />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
