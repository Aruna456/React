

 const Card = ({data}) => {
    const {title,description} =data
    
  return (
    <>
    <div className="bg-white w-[20vw] h-[50vh]  border-2 shadow-lg drop-shadow-lg rounded-xl">
        <div className="border-2 border-gray-400 w-[20vw] h-[25vh] flex justify-center items-center rounded-md ">
            Project image
        </div>
        <div className="font-bold flex justify-center p-2">
           {title}
        </div>
        <div className="flex justify-start p-6">
            {description}
        </div>
    </div>
    </>
  )
}

export default Card