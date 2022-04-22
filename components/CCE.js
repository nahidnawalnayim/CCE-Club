import Image from "next/image";
import React from "react";
import Wrapper from "./layout/Wrapper";

const CCE = () => {
  return (
    <Wrapper>
      <div className='flex flex-col items-center space-y-10 text-4xl sm:text-7xl xl:space-y-24 '>
        <h1 className='w-full  text-center font-extrabold '>
          <h2 className='w-full pl-5 text-left md:px-0'>Dept. of</h2>
          Computer and Communication Engineering
        </h1>

        <div className='flex flex-col items-center space-y-10 bg-opacity-50   text-center md:space-y-0 md:text-left lg:space-x-10 xl:flex-row '>
          <img src={"/img/rectangle.png"} />
          <p className='mx-auto rounded-lg border  border-black  text-justify text-2xl font-semibold backdrop-blur  dark:border-white  sm:p-10 xl:text-left'>
            The Department of Computer and Comunication Engineering (CCE) is a
            greate field of science and engineering, which has been the nexus
            for propagating scientific expertise among people all over the
            globe. CCE continues to attract students, faculty and professionals
            from various fields all around the world and is committed to
            incorporating diversity in thoughts which is essential for
            scientific development. CCE serves as a hub to many engineering
            students and faculty members for expressing their technical acuity
            to the world and has always been at the forefront of the
            Communicational revolution.
            <a className='cursor-pointer whitespace-nowrap rounded bg-slate-700 px-2 text-white dark:bg-white dark:text-black'>
              Learn more...
            </a>
          </p>
          {/* <Image src={ }/> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default CCE;
