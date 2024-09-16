import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>

      <div className=" w-screen h-screen  bg-zinc-950  flex justify-center items-center">
        <div className="w-full max-w-md mx-auto p-8  rounded-lg shadow-lg backdrop-blur-lg">
          <form className="flex flex-col space-y-6">
            <h1 className="text-3xl text-white font-semibold text-center">Register</h1>

            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full p-3 border-none rounded-lg shadow-inner bg-white focus:outline-none  focus:ring-red-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border-none rounded-lg shadow-inner bg-white focus:outline-none focus:ring-2  focus:ring-red-500"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              className="w-full p-3 border-none rounded-lg shadow-inner  bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border-none rounded-lg shadow-inner  bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border-none rounded-lg shadow-inner bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-auto bg-red-400 text-white font-bold py-2 rounded-lg transition duration-200 ease-in"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
