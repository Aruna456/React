import Navbar from "./components/NavBar"

const App = () => {
    const Appname ={name:"Rescue",id:11};
    return(
         <>   
          <div className="h-screen w-screen flex flex-col justify-start items-start ">
                <Navbar appname={Appname}/>
          </div>
         </>
    )
}

export default App