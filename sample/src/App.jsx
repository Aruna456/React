import Navbar from "./components/NavBar"

const App = () => {
    const Appname ="RescueAid";
    return(
    

         <>
          
          <div className="h-screen w-screen flex flex-col justify-center items-center">
                <Navbar appname={Appname}/>
          </div>


         </>
    )
}

export default App