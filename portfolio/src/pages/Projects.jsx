
import Card from "../components/Card"
import Khelospot from "../assets/img/khelospot.png"
import PulseRx from "../assets/img/pulseRx.png"
import ExpenZa from "../assets/img/Expenza.png"
const Projects = () => {

  const Projectdata = [{

    image:Khelospot,
    title: "KheloSpot",
    description: "Online sport event registration platform using HTML,CSS"
  },
  {
    image:PulseRx,
    title: "PulseRx",
    description: "Pharmacy Management System using Php and MySQL"
  },
  {
    image:ExpenZa,
    title: "Expenza",
    description: "Expense Tracking application using MERN Stack"
  }
  ]

  return (
    <div className="flex flex-col items-center">

      <div className="font-bold text-grad-color-left font-sans text-2xl flex justify-center w-full h-[20vh] items-center">
        Project Galaxy
      </div>
      
        <div className="flex flex-row gap-20">
          <Card data={Projectdata} />
        </div>

    </div>
  )
}

export default Projects 