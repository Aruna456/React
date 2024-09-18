

import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
    <div className="bg-slate-50 w-screen h-screen">
      <BrowserRouter>
      <Routes>
    
        <Route path='/' element= {<Profile/>}/>
  
        <Route path='/Projects' element ={<Projects/>}/>
        <Route path='/Contacts' element ={<Contact/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
      
     
    </>
  )
}

export default App
