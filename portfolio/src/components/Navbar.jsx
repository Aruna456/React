import '../assets/css/core.css'
import { SquareUserRound,X} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import {NavLink} from 'react-router-dom'
 const Navbar = () => {
    const NavLinks=[
      {
        title:"Profile",
        path:"/"
      },
      {
        title:"Projects",
        path:"/Projects"

      },
      {
        title:"Contact",
        path:"/Contacts"

      }
    ]
    const [visible,setvisible]=useState(false)

  
    
  return (
    <>
        <div className="grad-bg-nav shadow-xl w-full h-[10vh] flex drop-shadow-2xl  ">
          <div className="flex justify-start flex-row  w-1/2 p-8 items-center text-xl font-bold text-white "> 
            Aruna Subramanian
          </div>
          <div className="w-[40vw] flex flex-row justify-center items-center text-white font-bold">
           
            <ul className="list-none flex flex-row  gap-6 items-center">
              {
                NavLinks.map((navdata,index)=>(
                   <NavLink key={index} to={navdata.path}>
                           <li className='text-white font-bold'>{navdata.title}</li>
                   </NavLink>
                ))
              }
              </ul>
              {/* <Link to="/">
              <li>Home</li>
              </Link>
             <Link to="/Projects">
             <li>Projects</li>
             </Link>
             <Link to="/Contacts">
             <li>Contact</li>
             </Link>
             </ul>*/}
             </div>
            
            <div className="flex justify-center items-center text-white w-[5vw]  ">
            <SquareUserRound  className="cursor-pointer h-8 w-9 hover:rounded-full hover:p-1 hover:bg-pink-400" onClick={()=>setvisible(true)} />
         
            </div>
        </div>
        {
          visible&&(
            <>
            <div className=" h-screen w-screen flex justify-center items-center bg-black/60 absolute z-10">
              <div className=" bg-white  w-[30%]  h-[50%] shadow-lg">
              <div className="h-[9vh] flex justify-center gap-8 text-grad-color-left list-none font-bold text-2xl rounded-lg shadow-lg drop-shadow-lg items-center">
             <li className="w-1/2 flex justify-center">
              Login
             </li>
             <li className="w-1/2 flex  p-3 justify-end">
              <X onClick={()=>{setvisible(!visible)}}/>
             </li>
              </div>
              <div className='w-[50vh] flex-col  items-center flex'>
                <input type="email" name="email" id="email" placeholder='Email' className=' bg-none text-black focus:outline-none border-b-rose-600' required/>
                <input type="password" name="pwd" id="pwd" placeholder='Password' className=' bg-none text-black focus:outline-none border-b-rose-600' required/>
              </div>
              <div className=''>
                 <button type="submit" className='' >Submit</button>
              </div>
            
              </div>

            </div> 
            </>
        )
      }
         
    </>
   
      
      
    
  )
}
export default Navbar