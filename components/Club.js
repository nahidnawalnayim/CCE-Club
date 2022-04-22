import React from "react";
import Wrapper from "./layout/Wrapper";

const Club = () => {
  return (
    <Wrapper>
      <h1 className=' relative text-6xl font-bold lg:-top-28'>CCE-CLUB</h1>
      <ul className='flex w-full flex-col items-center justify-between lg:flex-row'>
        <li className='h-96 w-full max-w-md bg-black'></li>
        <p className='mx-auto rounded-lg border  border-black max-w-5xl  sm:p-10 text-justify text-2xl font-semibold  backdrop-blur  dark:border-white xl:text-left'>
          The Department of Computer and Comunication Engineering (CCE) is a
          greate field of science and engineering, which has been the nexus for
          propagating scientific expertise among people all over the globe. CCE
          continues to attract students, faculty and professionals from various
          fields all around the world and is committed to incorporating
          diversity in thoughts which is essential for scientific development.
          CCE serves as a hub to many engineering students and faculty members
          for expressing their technical acuity to the world and has always been
          at the forefront of the Communicational revolution.
          <a className='cursor-pointer whitespace-nowrap rounded bg-slate-700 px-2 text-white dark:bg-white dark:text-black'>
            Learn more...
          </a>
        </p>
      </ul>
    </Wrapper>
  );
};

export default Club;
