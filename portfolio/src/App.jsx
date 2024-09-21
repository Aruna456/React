// import Mq from "./pages/mq"

import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { WebLayout } from './layouts/WebLayout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="bg-slate-50 w-screen h-screen">
      <BrowserRouter>
      <Routes> 
        <Route element={<WebLayout/>}>
        <Route path='/' element= {<Profile/>}/>
        <Route path='/Projects' element ={<Projects/>}/>
        <Route path='/Contacts' element ={<Contact/>}/>
       </Route>
       </Routes>
      </BrowserRouter>
    </div>
    
     
    </>
  )
}

export default App
