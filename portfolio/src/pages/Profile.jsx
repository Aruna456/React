import Arunaimg from "../assets/img/Arunapic.png"
import "../assets/css/core.css"
import Java from '../assets/img/java.png'
import C from '../assets/img/c.png'
import HTML from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import mongodb from '../assets/img/mongo.png'
import mysql from '../assets/img/mysql.png'
import react from '../assets/img/physics.png'


 const Profile = () => {
  return (
       <>
     
     <div className="w-screen h-[80vh] flex">
     <div className="flex w-1/2 h-[80vh] flex-col justify-center">
          <div className="px-28 font-extrabold text-5xl">
            <span className="text-grad-color-left">Hii!! </span>
            <span className="text-grad-color-right">This is Aruna</span><br />
            <span className="text-[50%] font-sans">
            A passionate innovator blending creativity with technology
              </span>
            </div>      
            <div className="px-28">
              <br />
              I'm a passionate full-stack developer eager to learn and contribute to innovative projects. Currently a student, I'm always seeking opportunities to showcase my skills and push the boundaries of what's possible with technology. I’m also deeply interested in mentoring others, helping them grow while continually expanding my own knowledge. 
              <br />
              <br />
              Here are the <span className="font-bold text-pink-600">SKILLS</span> I bring to the table:
            </div>
        </div>
        <div className="flex w-1/2 flex-col justify-center items-center">
        <img src={Arunaimg} alt="Aruna's Image" className="h-[50vh] border-3 shadow-2xl drop-shadow-2xl shadow-black rounded-full"/>
        </div>
     </div>
     {/* <div className=" flex flex-row justify-center"> */}
      <ul className="flex flex-row justify-center gap-28">
   
        <li><img src={HTML} alt="HTML" /></li>
        <li><img src={css} alt="CSS" /></li>
        <li><img src={js} alt="JS" /></li>
        <li><img src={react} alt="React" /></li>
        <li><img src={Java} alt="Java" /></li>
        <li><img src={C} alt="C" /></li>
        <li><img src={mysql} alt="MySQL" /></li>
        <li><img src={mongodb} alt="MongoDB" /></li>
      </ul>
    {/* </div> */}
     </>
   
  )
}

export default Profile