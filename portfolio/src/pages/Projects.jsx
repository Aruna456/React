
import Card from "../components/Card"
import { useState,useEffect } from "react"
import { getProject } from "../services/api"
// import Khelospot from "../assets/img/khelospot.png"
// import PulseRx from "../assets/img/pulseRx.png"
// import ExpenZa from "../assets/img/Expenza.png"
import AddComponent from "../components/AddComponent"
const Projects = () => {

   const[projectdata,setProjectdata]=useState(null)
  
   const fetchproject = async () =>{
    try{
      const{data}=await getProject()
      setProjectdata(data)
    }
    catch(error)
    {
      console.warn(error);

    }
   }
   console.log(projectdata)

   useEffect(()=>{
    fetchproject()
   },[])

   if(!projectdata||projectdata.length===0)
   {
    return(
      <div className="w-full h-[10%] flex justify-end items-center px-10 py-3">
      <AddComponent />
      </div>
    )
   }
  // const Projectdata = [{

  //   image:Khelospot,
  //   link:"https://github.com/Aruna456/Expense-Tracker-Using-MERN-STACK.git",
  //   title: "KheloSpot",
  //   description: "Online sport event registration platform using HTML,CSS"
  // },
  // {
  //   image:PulseRx,
  //   link:"https://github.com/Aruna456/Expense-Tracker-Using-MERN-STACK.git",
  //   title: "PulseRx",
  //   description: "Pharmacy Management System using Php and MySQL"
  // },
  // {
  //   image:ExpenZa,
  //   link:"https://github.com/Aruna456/Expense-Tracker-Using-MERN-STACK.git",
  //   title: "Expenza",
  //   description: "Expense Tracking application using MERN Stack"
  // }
  // ]

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[10%] flex justify-end items-center px-10 py-3">
      <AddComponent fetchproject={fetchproject}/>
      </div>
         
      <div className="font-bold text-grad-color-left font-sans text-2xl flex justify-center w-full h-[5vh] items-center">
        Project Galaxy
      </div>
        
        <div className="flex flex-row justify-center items-center flex-wrap gap-8">
           {
            projectdata.map((data,index)=>(

              <Card title={data.title} desc={data.desc} key={index}  img={data.coverimg}  link={data.link} fetchproject={fetchproject}/>

            ))
          }
           
        </div>

    </div>
  )
}

export default Projects 