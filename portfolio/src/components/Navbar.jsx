import '../assets/css/core.css'
import { SquareUserRound,Cross} from 'lucide-react';
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
        title:"Contacts",
        path:"/Contacts"

      }
    ]
    const [data,setdata]=useState(null)

    useEffect(()=>{
        console.log("UseEffect called")
    },[data])
   

    
  return (
    <>
        <div className="grad-bg-nav shadow-xl w-full h-[10vh] flex drop-shadow-2xl ">
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
            
            <div className="flex justify-center items-center text-white w-[5vw]">
            <SquareUserRound  className="h-8 w-9 hover:rounded-full  hover:bg-pink-400" />
            </div>
        </div>
        
    </>
  )
}
export default Navbar