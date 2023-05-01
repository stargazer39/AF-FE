import React from "react";

export function QuestionBox({ data }) {
  return (
    <div className="p-4  rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-bold">{data.name}</h2>
        </div>
        <div>
          <p className="text-gray-500">{data.date}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{data.description}</p>
      </div>
      <div className="flex justify-end mt-4">
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