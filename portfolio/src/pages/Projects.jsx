
import Card from "../components/Card"
 const Projects = () => {

  const Projectdata={
    title:"KheloSpot",
    description:"Online sport event registration platform using HTML,CSS"
  }
  // {
  //   title:"PulseRx",
  //   description:"Pharmacy Management System using Php and MySQL"
  // },
  // {
  //   title:"Expenza",
  //   description:"Expense Tracking application using MERN Stack"
  // }

  return (
    <div className="flex flex-col items-center">

      <div className="font-bold text-grad-color-left font-sans text-2xl flex justify-center w-full h-[20vh] items-center">
        Project Galaxy
      </div>
      <div className="flex flex-row gap-20">
      <div className="">
      <Card data={Projectdata}/>
      </div>
      <div className="">
      <Card data={Projectdata}/>
      </div>
      <div className="">
      <Card data={Projectdata}/>
      </div>

      </div>
     
    </div>
  )
}

export default Projects 