import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { register } from "../../services/User";
import cover from "../../images/reg.gif"

const Login = () => {
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    await register({
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    })
      .then((res) => {
        navigate({
          pathname: "/verify",
          search: createSearchParams({
            email: userEmail,
          }).toString(),
        });
      })
      .catch((err) => console.error(err));
  };
  const onLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col flex-1 bg-blue-500 items-center justify-center h-screen">
        <form onSubmit={handleForm} className="flex flex-col items-center w-1/2">
          <span className="font-medium text-3xl text-white mb-10">Sign Up</span>
          <input
            className="bg-transparent border-2 my-4 border-input-border border-white rounded-[5px] h-12 w-full p-4 placeholder-gray-200 text-black "
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-transparent border-2 my-4 border-input-border  border-white rounded-[5px] h-12 w-full placeholder-gray-200 p-4 text-black"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            className="bg-transparent border-2 my-4 border-input-border  border-white rounded-[5px] h-12 w-full placeholder-gray-200 p-4 text-black"
            name="password"
            type="password"
            placeholder="Password"
          />
          <input
            className="bg-transparent border-2 my-4 border-input-border  border-white rounded-[5px] placeholder-gray-200 h-12 w-full p-4 text-black"
            type="password"
            placeholder="Re-enter Password"
          />
          <div className=' w-full flex  justify-end mt-8'>
            <button
              className="border border-2 border-white-500 hover:bg-blue-700 text-white active:-bg-blue-700 mr-4  w-1/4 h-10 rounded-[5px] flex justify-center items-center "
              onClick={onLoginClick}
            >
              Login
            </button>
            <button className="bg-gray-700 hover:bg-blue-800 active:bg-blue-900  w-32 h-10 rounded-[5px] flex justify-center items-center text-white">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="relative w-1/2 h-screen">
        <div className="flex justify-center h-screen items-center">
          <img src={cover} className="w-2/3 h-2/3 object-cover" alt="Cover" onClick={onLoginClick}/>
        </div>
        <div className="absolute top-0 left-0 p-4 text-blue-600">
          <h1 className="text-4xl font-bold">Educircle</h1>
          <p className="text">Build  your future with confidence!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
