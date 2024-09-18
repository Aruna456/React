import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
export const WebLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        
    </div>
  )
}
