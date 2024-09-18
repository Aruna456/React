import Navbar from "../components/Navbar";
  const Contact = () => {
  return (
  
      <>
        <Navbar/>
        <div className="w-screen my-14 flex justify-center  items-center">
           
           <div className="flex flex-col rounded-md drop-shadow-2xl">
           <form action="" method="post" className=" w-[40vw] h-[50vh] flex flex-col space-y-5 justify-center  items-center drop-shadow-xl">
            
          
            <h1 className="text-black font-bold text-2xl p-2">Aruna</h1>
            <h4 className="text-black">arunasubramanian456@gmail.com</h4>
              <input type="text" name="name" id="" placeholder="Username" className="border-gray-400 rounded-md p-2  text-black border-2 focus:outline-none w-[30vw] bg-transparent" />
              <textarea name="msg" id="" cols="60" rows="5" placeholder="Write a Message" className="bg-transparent border-2 focus:outline-none text-black rounded-md border-gray-400"></textarea>
               <button type="submit" className="bg-transparent border-2 border-gray-400 text-black p-2 rounded-md w-[10vw] hover:bg-red-600 hover:text-white">Send</button>
              
            </form>
            <div className="w-[40vw] flex flex-col h-[30vh]  justify-center  items-center">
            <ul className="text-black flex gap-4">
              <li>
                LinkedIn icon
              </li>
              <li>
                Mail icon
              </li>
              <li>
                Github icon
              </li>
            </ul>
            </div>
            
            
          </div>


           </div>
           
        </>
  )
}
 
export default Contact