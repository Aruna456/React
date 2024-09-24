
import { useState } from "react"

const Card = ({ data }) => {

  const[count,setcount]=useState(null)
  console.log(data)
  return (
    <>
      {/* {data.map((project,index) => (

        <div className="bg-white w-[20vw] h-[50vh]  border-2 shadow-lg drop-shadow-lg rounded-xl" key={index}>
          <div className="border-2 border-gray-400 w-[20vw] h-[25vh] flex justify-center items-center rounded-md ">
            Project image
          </div>
          <div className="font-bold flex justify-center p-2">
            {project.title}
          </div>
          <div className="flex justify-start p-6">
            {project.description}
          </div>
        </div>
      ))
      } */}
      {data.map((project,index)=>
      (
        <div class="relative flex w-80 mt-8 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" key={index} >
          <div class="mx-4 -mt-6 h-40 rounded-lg  bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 ">
           <img src={project.image} alt={project.title} className="rounded-xl shadow-lg drop-shadow-md" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {project.title}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {project.description}
            </p>
          </div>
          <div class="p-6 pt-0">
            <button data-ripple-light="true" type="button" class="select-none rounded-lg button-bg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500 transition-all hover:shadow-lg hover:shadow-pink-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>{
              setcount(count+1)
            }}>
              {count} Visit 
            </button>
          </div>
        </div>

      ))
        
      }

    </>
  )
}

export default Card