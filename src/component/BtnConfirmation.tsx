import React from 'react';
import IconConfirmation from "../assets/btnConfirmation.svg"

const btnConfirmation = () => {
  return (
    <>
      <button className="btn-confirmation flex py-2.5 pr-6 pl-4 justify-center items-center gap-2 border rounded-[20px] bg-[--M3-sys-light-primary] text-white text-center" > 
        <IconConfirmation />
        <span className="text-sm font-medium leading-5 tracking-wide">Proceed Confirmation</span>
      </button>
    </>
    
  );
};

export default btnConfirmation;