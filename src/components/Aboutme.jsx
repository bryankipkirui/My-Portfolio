import React from "react";
import image from "../images/img2.jpg";
import Linker from "./Linker";
import datas from '../data.json';

const Aboutme = () => {

  const description = datas[0]?.info;
  return (
    <section className="mt-20 mb-20 py-8 px-4 bg-gray-900 shadow-lg rounded-lg">
      <div className="flex flex-row flex-1 space-x-4">
        <div className="flex p-6 justify-center flex-1 ">
          <img
            className="m-auto rounded-full w-60 h-80 object-cover md:w-80 md:h-[420px]"
            src={image}
            alt="Logan"
          />
        </div>
        <div className="flex-1 py-4 px-6 space-y-">
          <h2 className="text-3xl mb-4 text-gray-400 font-bold">About <span style={{ color: 'orangered' }}>Me</span></h2>
          <h1 className="text-4xl font-bold mb-5 text-gray-400">Frontend Developer</h1>
          <p className="text-gray-400 mb-6">
            {description}
          </p>
          <Linker
            to="https://docs.google.com/document/d/1-fmMEjsd1JCCZmoUqE5s2j3qRX7plcd4/edit?usp=sharing&ouid=102215646855886584443&rtpof=true&sd=true"
            text='Resume'
            isExternal={true}
            bg='bg-orange-600'
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
