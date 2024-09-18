import Navbar from "../components/Navbar";
import Gitlogo from "../assets/img/github.png"
import LinkedIn from "../assets/img/linkedin.png"
import  Mail from "../assets/img/email.png"
import {Link} from "react-router-dom"
  const Contact = () => {
  return (
  
      <>
        <div className="w-screen my-14 flex justify-center  items-center">
           
           <div className="flex flex-col rounded-md drop-shadow-2xl">
           <form action="" method="post" className=" w-[40vw] h-[50vh] flex flex-col space-y-5 justify-center  items-center drop-shadow-xl">

            <h1 className="text-black font-bold text-2xl p-2">Aruna</h1>
            <h4 className="text-black">arunasubramanian456@gmail.com</h4>
              <input type="text" name="name" id="" placeholder="Username" className="border-gray-400 rounded-md p-2  text-black border-2 focus:outline-none w-[30vw] bg-transparent" />
              <textarea name="msg" id="" cols="60" rows="5" placeholder="Write a Message" className="bg-transparent border-2 focus:outline-none text-black rounded-md border-gray-400"></textarea>
               <button type="submit" className="bg-transparent border-2 border-gray-400 text-black p-2 rounded-md w-[10vw] hover:bg-pink-600 hover:text-white">Send</button>
              
            </form>
            <div className="w-[40vw] flex flex-col h-[30vh]  justify-center  items-center">
            <ul className="text-black  flex flex-row gap-4">
              <Link to="https://github.com/Aruna456">
              <li>
                 <img src={Gitlogo} alt="" />
              </li>
              </Link>
              <Link to="https://www.linkedin.com/in/aruna-subramanian-b42869271">
              <li>
              <img src={LinkedIn} alt="" />
              </li>
              </Link>
              <Link to="https://mail.google.com">
              <li>
              <img src={Mail} alt="" />
              </li>
              </Link>
            </ul>
            </div>
            
            
          </div>


           </div>
           
        </>
  )
}
 
export default Contact