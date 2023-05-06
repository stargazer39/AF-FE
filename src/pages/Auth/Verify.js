import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verify } from '../../services/User'
import auth from "../../images/auth.png"

const Login = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const handleForm = async e => {
    e.preventDefault()
    await verify({
      email: searchParams.get('email'),
      verificationCode: e.target.verificationCode.value,
    })
      .then(res => {
        navigate('/login')
      })
      .catch(e => console.error(e))
  }
  return (
    <div className="flex  ">
     
      <div className='w-1/2'>
        <img src={auth} alt="Verify" className="flex-1  w-full " />
      </div>
      
      <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center items-center h-screen w-full'>
          <div className='w-3/5 bg-gray-200 text-center'>
            <h1 className='mt-4 text-xl text-blue-600'>EduCircle </h1>
          </div>
          <div className="flex bg-gray-200 justify-center items-center w-3/5 h-screen  p-16">
            <form onSubmit={handleForm} className="flex flex-col items-center">
              <span className="font-medium text-3xl text-gray-900 ">Enter Your <span className='text-blue-700'>Verification</span>  Code</span>
              <span className="font-medium text-gray-900 ">Check your email. We have sent you a verification code :)</span>
              <input
                className="bg-transparent border-2 border-gray-500 my-4 border-input-border rounded-[5px] mt-12 h-12 w-full p-4 text-blue-700"
                name="verificationCode"
                type="number"
                placeholder="Verification Code"
              />
              <div className='w-full flex justify-end'>
                <button className="bg-blue-500 hover:bg-blue-600 w-36 active:bg-blue-700 font-bold mt-10 w-1/4 h-10 rounded-[5px] flex justify-center items-center text-base font-normal">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login
