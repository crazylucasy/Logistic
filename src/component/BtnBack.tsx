import React from 'react';
import IconBack from "../assets/btnBack.svg"

const btnBack = () => {
  return (
    <>
      <button className="btnBack flex py-2.5 pr-6 pl-4 justify-center items-center gap-2 border rounded-[20px] text-[--M3-sys-light-primary] text-center" > 
        <IconBack />
        <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
      </button>
    </>
    
  );
};

export default btnBack;