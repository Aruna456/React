const Navbar = ({appname})=>{
    // console.log(appname)
     const {name,id} = appname;
    return(
        <>
        <div className="w-full h-[10%] bg-blue-700 p-4 text-white flex flex-col justify-start items-start">
            <div className="flex justify-center items-center w-full">
            {name}
       
            {id}
            
            </div>
        
         </div>
        </>
         
        
    )
}

export default Navbar;