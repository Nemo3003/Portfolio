import {NavBar} from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import MyServices from './components/MyServices'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'


function App() {

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
