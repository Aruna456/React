import Arunaimg from "../assets/img/Arunapic.png"
import "../assets/css/core.css"
 const Profile = () => {
  return (

     <div className="w-screen h-[80vh] flex">
     <div className="flex w-1/2 h-[60vh] flex-col justify-center ">
          <div className="p-8 font-extrabold text-5xl">
            <span className="text-grad-color-left">Hii!! </span>
            <span className="text-grad-color-right">I'm Aruna</span>
            </div>      
            <div className="p-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ratione iste provident harum minus. Deleniti ipsum illum officia animi, maxime iure praesentium quae magnam sapiente eligendi commodi. Consectetur, magni ducimus!
            </div>
        </div>
        <div className="flex w-1/2 flex-col justify-center items-center">
        <img src={Arunaimg} alt="Aruna's Image" className="h-[50vh] border-3 shadow-2xl drop-shadow-2xl shadow-black rounded-full"/>
        </div>
     </div>
  )
}

export default Profile