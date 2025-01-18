import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState('null')
  const [data, setData] = useState('null')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlesudmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/user/login', {
        username,
        password
      })
      const Data = await response.data
      setData(Data)
      toast.success(`${Data.message}`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      })
      const {token} = Data
      localStorage.setItem('token',token)

      setTimeout(() => {
        navigate('/landingpage',{state:{token}})
      }, 2000);
      console.log(Data.message)
      console.log(Data.token)

    }
    catch (err) {
      setError(err.response.data)
      if (err.response.data) {
        toast.error(`${err.response.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
        })
        console.log(err.response.data)
      } else if (err.request) {
        console.log("it have server rendring problem")
      } else {
        console.log(err)
      }
    }


  }


  return (
    <div>
      <ToastContainer />

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            orem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
            ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="#" onSubmit={handlesudmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>

            <div className="relative">
              <input
                type="username"
                className="w-full rounded-lg border-gray-200 bg-slate-100 p-4 pe-12 text-sm shadow-sm"
                placeholder=" Email"
                onChange={(e) => setUsername(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 bg-slate-100 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href='/'>Sign up</a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}