import React from 'react';
import IconDecline from "../assets/btnDecline.svg"

const btnDecline = () => {
  return (
    <>
      <button className="btn-decline flex py-2.5 pr-6 pl-4 justify-center items-center gap-2 border rounded-[20px] bg-red-600 text-white text-center" > 
        <IconDecline />
        <span className="text-sm font-medium leading-5 tracking-wide">Decline requirest</span>
      </button>
    </>
    
  );
};

export default btnDecline;