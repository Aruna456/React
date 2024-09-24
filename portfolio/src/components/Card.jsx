import {Pencil,Trash,X} from "lucide-react"
import { useState,useRef } from "react"
import {Link} from 'react-router-dom'
import { editProject,deleteProject } from "../services/api"
const Card = ({ title,desc,img,link,fetchproject }) => {

  // const[count,setcount]=useState(null)
  
  // console.log(data)
  const [titleState, setTitleState] = useState(title);
    const [descState, setDescState] = useState(desc);
    const [linkState, setLinkState] = useState(link);
    const [coverState, setCoverState] = useState(img);
   const [visible,setvisible]=useState(false)

   const handleEdit =async (e)=>{
    e.preventDefault()
    const projectdata={
      title: titleState,
      desc: descState,
      link: linkState,
      coverimg: coverState
    }

    try{
      const response =await editProject(id,projectdata)
      if(response.status===200)
      {
        console.log("Updated")
        alert("Updated")
      }
      fetchproject()
    }
  catch(error)
  {
    console.warn("Error")
    alert("Error")

  }
  setvisible(false)
   }
  const handleDelete = async (id) =>{
      
    try {

      const response = await deleteProject(id)
      if(response.status===200)
      {
        console.log("Deleted");
        alert("Error")
      }
      fetchproject()
      
    } catch (error) {
       console.log("Error")
       alert("Error")
    }
  }

  return (
    <>
     
      {/* {data.map((project,index)=>
      (
        <div class="relative flex w-80 mt-8 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" key={index} >
          <div class="mx-4 -mt-6 h-40 rounded-lg  bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 ">
           <img src={project.image} alt={project.title} className="rounded-xl shadow-lg drop-shadow-md" />
          </div>
          <div class="p-8">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {project.title}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {project.description}
            </p>
          </div>
          <div class="p-6 pt-0">
            <Link to={project.link}>
            <button data-ripple-light="true" type="button" className="select-none rounded-lg button-bg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500 transition-all hover:shadow-lg hover:shadow-pink-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>{
              setcount(count+1)
            }}>
              {count} Visit 
            </button>
            </Link>
          </div>
        </div>

      ))
        
      } */}

<div class="relative flex w-80 h-[65%] mt-8 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"  >
          <div class="mx-4 -mt-6 h-40 rounded-lg  bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 ">
           <img src={img} alt={title} className="rounded-xl shadow-lg drop-shadow-lg" />
          </div>
          <div class="mt-16">
            <h5 class="mb-2 block px-5 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title} 
            </h5>
            <p class="block px-5 font-sans text-base font-light leading-relaxed text-inherit antialiased">
               {desc} 
              
            </p>
          </div>
          <div className="flex flex-row w-full justify-start">
            
            <div className="w-1/2 flex justify-start px-2">
            <Link to={link}>
            <button data-ripple-light="true" type="button" className="select-none rounded-lg button-bg py-3 mt-5  px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500 transition-all hover:shadow-lg hover:shadow-pink-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
           Visit 
            </button>
            </Link></div>
           <div className="w-1/2 flex justify-end ">
           <ul className="list-none flex flex-row gap-2 p-4" >
              <li className="bg-pink-600 text-sm text-white rounded-[50%] p-3 cursor-pointer" onClick={()=>{setvisible(true)}}><Pencil/></li>
              <li className="bg-pink-600 text-sm text-white rounded-[50%] p-3 cursor-pointer" onClick={handleDelete}><Trash/></li>

            </ul></div>
      

          </div>
          

        </div>
        {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[70%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                                
                                <div className='w-full flex justify-end p-3 items-center '>
                                    <X className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)}/>
                                    </div>
                             
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4"
                                    onSubmit={handleEdit}>
                                  
                                        <input type="text" value={titleState} onChange={(e)=>{setTitleState(e.target.value)}}  name="title" id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-b-2 hover:border-pink-200  focus:border-pink-600" required />
                                        <input type="text" value={descState}  onChange={(e)=>{setDescState(e.target.value)}}name="desc" id="desc" placeholder="Desc" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-pink-200 focus:border-pink-600 mb-3" required />
                                        <input type="text" value={linkState} onChange={(e)=>{setLinkState(e.target.value)}}name="link" id="Link" placeholder="Project Link" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-pink-200 focus:border-pink-600 mb-3" required />
                                        <input type="text" value={coverState}onChange={(e)=>{setCoverState(e.target.value)}} name="img" id="cover" placeholder="image URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-pink-200 focus:border-pink-600 mb-3" required />
                                        <button type="submit" className="text-white  bg-pink-700 shadow-lg drop-shadow-lg shadow-pink-900font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4"
                                       >Add Project</button>
                                    </form>
                                </div> 
                            </div> 
                        </div>
                    </>
                )
            }


    </>
  )
}

export default Card