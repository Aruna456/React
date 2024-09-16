const Navbar = ({appname})=>{
    console.log(appname)
    return(
        
         <div className="w-full h-[3vh] bg-blue-700 p-4 text-white flex justify-center items-start">
            {appname}
         </div>
        
    )
}

export default Navbar;