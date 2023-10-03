
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { login } from '../../services/User'
import cover from "../../images/log.png"
import { API_ENDPOINT } from '../../config';

const Login = () => {
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    await login({
      email: e.target.email.value,
      password: e.target.password.value,
    })
      .then(res => {
        localStorage.setItem('token', res.data.data.access_token)
        navigate('/')
        navigate(0)
      })
      .catch((err) => {
        alert(err.response.statusText);
      });
  };
  const onRegisterClick = () => {
    navigate("/register");
  };

  const [searchParams,] = useSearchParams();

  useEffect(() => {
    const autoLogin = async () => {
      if(searchParams.get("auth") !== "google")
        return;

      await login({
        email: searchParams.get("email"),
        password: "###########",
      })
  
        .then(res => {
          localStorage.setItem('token', res.data.data.access_token)
          navigate('/')
          navigate(0)
        })
        .catch((err) => {
          alert(err.response.toString());
        });
    }

    autoLogin();
  }, []);
  return (
    <div className="flex justify-center items-center ">
      {/* <img src="Login.svg" alt="Login" className="flex-1 h-[500px] w-[500px]" /> */}
      
      <div className="relative w-1/2 h-screen">
        <img src={cover} className="w-full h-full object-cover" alt="Cover" />
        <div className="absolute top-0 left-0 p-4 text-white">
          <h1 className="text-4xl font-bold">Educircle</h1>
          <p className="text">Build  your future with confidence!</p>
        </div>
      </div>
      <div className="flex flex-col flex-1  justify-center items-center h-screen ">
        <form onSubmit={handleForm} className="flex flex-col items-center w-6/12">
          <span className="font-medium text-3xl text-blue-500 mb-10">Login</span>
          <input
            className="bg-transparent border-2 my-4 border-gray-500  border-input-border rounded-[5px] mb-8 h-12 w-full p-4 text-gray-700"
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-transparent border-2 border-gray-500 border-input-border rounded-[5px] h-12 w-full p-4 text-gray-700"
            name="password"
            type="password"
            placeholder="Password"
          />

          <div className=' w-full flex  justify-end mt-4'>
            <button className="border rounded-[5px] mr-4 border-gray-600  hover:border-blue-600 mt-10 hover:bg-blue-600 active:bg-blue-700 text-black w-24 h-10 text-base font-normal" onClick={onRegisterClick}>
              Register
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 mt-10 text-white w-32 h-10 rounded-[5px]  text-base font-normal">
              Login
            </button>
          </div>
          <div className='pt-4 w-full flex items-justify  justify-center'>
            <div class="px-6 sm:px-0 max-w-sm">
                  <a href={`${API_ENDPOINT}/api/auth/login/google`} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></a>
              </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
