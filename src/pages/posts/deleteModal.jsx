import React, { useState } from 'react';
import loading from "../../images/loading.gif"

function LoadingMod({ data }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-700 to-blue-900 opacity-70" ></div>
      <div className="relative bg-gray-200 rounded-lg w-2/6">
        <h1 className=" text-center pt-4 text-3xl text-blue-500">Please Wait...</h1>
        <div className='flex justify-center m-10'>
          <img src={loading} width={75} alt="Loading Icon" />
        </div>
      </div>
    </div>
  );
}

export default LoadingMod;