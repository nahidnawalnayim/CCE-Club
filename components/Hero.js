import React from "react";

const Hero = () => {
  return (
    <div className='bg-center flex min-h-screen w-screen text-4xl  max-w-screen-2xl flex-row items-center justify-center overflow-hidden rounded-xl bg-hero-light text-center  leading-normal text-white dark:bg-hero-dark sm:flex-col  sm:items-start    md:text-left'>
      <div className='w-full md:px-16 lg:px-44'>
        <h1
          className=' text-7xl font-extrabold
        '>
          CCE CLUB
        </h1>
        <h3 className='font-semibold underline decoration-yellow-500'>
          Representatives of
        </h3>
        <h2>{"{Computer and Communication Engineering}"}</h2>
      </div>
    </div>
  );
};

export default Hero;
