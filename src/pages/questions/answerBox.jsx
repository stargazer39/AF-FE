import React from "react";

export function AnswerBox({ data }) {
  return (
    <div className="p-4 flex flex-col rounded-md">
      <div className="flex">
        <div className="w-2/12 pt-1/2">
            <h4 className="text-xl font-bold">{data.name}</h4>
            <p className="text-gray-500">{data.date}</p>
        </div>

        <div className="mt-4 w-9/12">
            <p className="text-gray-700">{data.description}</p>
        </div>
      </div>
      
      <div className="flex items-end justify-end mt-2 border-b border-gray-200 pb-4">
        <button
          className="px-4 mr-2 py-2 text-black-500 bg-gray-300  rounded hover:text-white hover:bg-gray-400"
          onClick={data.button2Click}
        >
          Remove
        </button>
        <button
          className="mr-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-800"
          onClick={data.button1Click}
        >
          Modify
        </button>
      </div>
    </div>
  );
}