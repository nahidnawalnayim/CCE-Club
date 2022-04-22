import React from "react";
import Wrapper from "../layout/Wrapper";
import Executive from "./Executive";

const Executives = () => {
  return (
    <Wrapper>
      <div className='flex flex-col items-center  space-y-8 py-10'>
        <h2 className='text-3xl'>Meet Our</h2>
        <h1 className='text-4xl'>CCE CLUB EXECUTIVES</h1>
      </div>
      <div className=' py-10 flex flex-col items-center space-y-10 md:flex-row md:space-x-20  md:space-y-0'>
        <Executive
          src='/img/rectangle.png'
          name='Dr. Saifuddin'
          position='President'
        />
        <Executive
          src='/img/rectangle.png'
          name='Dr. Saifuddin'
          position='President'
        />
        
      </div>
      <div className=' py-10 flex flex-col items-center space-y-10 md:flex-row md:space-x-20  md:space-y-0'>
        <Executive
          src='/img/rectangle.png'
          name='Dr. Saifuddin'
          position='President'
        />
        <Executive
          src='/img/rectangle.png'
          name='Dr. Saifuddin'
          position='President'
        />
        <Executive
          src='/img/rectangle.png'
          name='Dr. Saifuddin'
          position='President'
        />
      </div>
    </Wrapper>
  );
};

export default Executives;
