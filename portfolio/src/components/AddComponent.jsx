import { Plus, X } from 'lucide-react'
import { useState,useRef } from 'react'
import { addProject } from '../services/api'

const AddComponent = ({fetchproject}) => {

    const titleref=useRef(null)
    const descref=useRef(null)
    const linkref=useRef(null)
    const imgref=useRef(null)

    const handleAdd= async (e)=>{

        e.preventdefault()
        const projectdata={
            title:titleref.current.value,
            desc:descref.current.value,
            link:linkref.current.value,
            img:imgref.current.value
        }

        console.log(projectdata)

        try{
             const response =await addProject(projectdata)
             if(response.status===201)
             {
                console.log("Project Added")
             }
             fetchproject()
        }
        catch(error){
             
            console.log("Error")
            
        } 

       setvisible(!visible)
        console.log("Returned");
        

    }



    const [visible, setvisible] = useState(false)
    return (
        <>
            <button  onClick={() => {setvisible(true)}} className='bg-pink-500 text-white p-2 rounded-md' >
                <Plus  />
            </button>
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
                                    onSubmit={()=>{console.log("Button")}}>
                                  
                                        <input type="text"  ref={titleref} name="title" id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-b-2 hover:border-pink-200  focus:border-pink-600" required />
                                        <input type="text" ref={descref} name="desc" id="desc" placeholder="Desc" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-pink-200 focus:border-pink-600 mb-3" required />
                                        <input type="text"  ref={linkref} name="link" id="Link" placeholder="Project Link" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-pink-200 focus:border-pink-600 mb-3" required />
                                        <input type="text" ref={ imgref} name="img" id="cover" placeholder="image URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-pink-200 focus:border-pink-600 mb-3" required />
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

export default AddComponent