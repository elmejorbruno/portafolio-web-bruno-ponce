import './App.css'
import About from './components/navbar/About'
import Footer from './components/navbar/Footer'
import Habilidades from './components/navbar/Habilidades'
import HeroMain from './components/navbar/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import Proyectos from './components/navbar/Proyectos'


function App() {

  return (
    <>
    <main>
      <NavbarMain/>
      <HeroMain/>
      <About/>

      <Habilidades/>
      <Proyectos/>
      <Footer/>
    </main>
     
    </>
  )
}

export default App
