import '../assets/css/core.css'
import { SquareUserRound } from 'lucide-react';
import {Link} from 'react-router-dom'
 const Navbar = () => {
  return (
    <>
        <div className="grad-bg-nav shadow-xl w-full h-[10vh] flex drop-shadow-2xl ">
          <div className="flex justify-center flex-row w-[10vw] items-center font-bold text-white "> 
            Aruna
          </div>
          <div className="w-full flex flex-row justify-end items-center text-white font-bold">

            <ul className="list-none flex flex-row gap-8">
              <Link to="/">
              <li>Home</li>
              </Link>
             <Link to="/Projects">
             <li>Projects</li>
             </Link>
             <Link to="/Contacts">
             <li>Contact</li>
             </Link>
              <li ><SquareUserRound size={30}/></li>
              <li></li>
            </ul>
          </div>

        </div>
    </>
  )
}
export default Navbar