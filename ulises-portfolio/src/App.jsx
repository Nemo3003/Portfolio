import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import MyServices from './components/MyServices'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>,
      <Header/>,
      <AboutMe/>,
      <MyServices/>,
      <Projects/>,
      <ContactMe/>,
      <Footer/>
    </div>
  )
}

export default App
