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
           <form action="" method="post" className=" w-[40vw] h-[70vh] flex flex-col rounded-md bg-white space-y-5 justify-center  items-center drop-shadow-xl">
      
            <h1 className="text-grad-color-left  font-bold text-4xl p-2 ">Let's Connect!</h1>
            <h4 className="text-black font-bold">Have a question or an exciting opportunity? Reach out below!</h4>
              <input type="mail" name="email" id="email" placeholder="Email" className="border-gray-400 rounded-md p-2  text-black border-2 focus:outline-none w-[30vw] bg-transparent" />
              <textarea name="msg" id="msg" cols="60" rows="5" placeholder="Share your thoughts here..." className="bg-transparent border-2 focus:outline-none text-black rounded-md border-gray-400"></textarea>
               <button type="submit" className=" border-2  p-2 rounded-md w-[10vw] font-bold bg-pink-600 text-white hover:bg-red-800">Send</button>
              
            </form>
            <div className="w-[40vw] flex flex-col h-[10vh]  justify-center  items-center">
            <ul className="text-black  flex flex-row gap-8 ">
              <Link to="https://github.com/Aruna456">
              <li>
                 <img src={Gitlogo} className="h-8" alt="" />
              </li>
              </Link>
              <Link to="https://www.linkedin.com/in/aruna-subramanian-b42869271">
              <li>
              <img src={LinkedIn} className="h-8" alt="" />
              </li>
              </Link>
              <Link to="https://mail.google.com">
              <li>
              <img src={Mail} className="h-8" alt="" />
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