import React from 'react';

function AddQuestionModal({ data }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-50" ></div>
      <div className="relative bg-blue-500 rounded-lg w-80">
        <h2 className="text-white text-center pt-4">Add a new Question</h2>
        <div className="p-4">
          <input type="text" className="w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter some text..." />
        </div>
        <div className="flex justify-end px-4 pb-4">
          <button className="px-4 py-2 rounded-md mr-2 text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:bg-gray-500">Cancel</button>
          <button className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-green-600">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestionModal;

// onClick={onClose}