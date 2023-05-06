import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/User'
import cover from "../../images/log.png"

const Login = () => {
  const navigate = useNavigate()

  const handleForm = async e => {
    e.preventDefault()
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
        alert(err.response.statusText)
      })
  }
  const onRegisterClick = () => {
    navigate('/register')
  }
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
          <div className=' w-full flex items-justify  justify-center'>
         
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
