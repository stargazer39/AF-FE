import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Test() {
  return (
    <div className="App">
      <body>
        <Navbar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <div className="bg-gray-200 p-4 rounded-lg">
          This is a gray box with Tailwind CSS!
        </div>
      </body>
    </div>
  );
}

export default Test;
