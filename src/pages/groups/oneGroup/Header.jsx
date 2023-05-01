import React from "react";

const Header = ({ group }) => {
  return (
    <>
      <header>
        {group.map((value) => (
          <div class="w-full bg-cover bg-center" style={{ height: "32rem" }}>
            <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
              <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
                  {value.groupName}
                </h1>
                <h2 class="mt-4 px-4 py-2 text-white text-sm  font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  {value.description}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </header>
    </>
  );
};

export default Header;
