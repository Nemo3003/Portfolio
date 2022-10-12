import {NavBar} from './components/NavBar'
import Footer from './components/Footer'
import  Header  from  './pages/Header'
import AboutMe from './pages/AboutMe'
import MyEducation from './pages/MyEducation'
import Projects from './pages/Projects'
import {ContactMe} from './pages/ContactMe'
import {BrowserRouter,Link, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/education' element={<MyEducation/>}/>
            <Route path='/project' element={<Projects/>}/>
            <Route path='/contact' element={<ContactMe/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App
