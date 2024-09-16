const Navbar = ({appname})=>{
    // console.log(appname)
     const {name,id} = appname;
    return(

        
        <>
        <div className="w-full h-[3vh] bg-blue-700 p-4 text-white flex flex-col justify-center items-start">
           {name}
           {id}
         </div>
        </>
         
        
    )
}

export default Navbar;