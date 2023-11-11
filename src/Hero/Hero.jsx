import React from 'react';
import watch from "../assets/pngwing.com (1).png"

const Hero = () => {

  return (
    <div className='flex justify-between'>
    <h1 className="underline mt-[10rem] whitespace-nowrap text-transparent text-5xl text-left ml-8 font-bold bg-clip-text bg-gradient-to-bl from-red-500 to-blue-500 animate-gradient">Safe Seconds, Smart Savings,<br /> HCS Made Simple.</h1>
    <img src={watch} alt="watch"  className="w-[40rem] h-[40rem]"/>
    </div>
  );
};

export default Hero;
