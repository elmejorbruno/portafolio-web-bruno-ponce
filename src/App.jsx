import "./App.css";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import Footer from "./components/Footer";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import Habilidades from "./pages/Habilidades/Habilidades";


import Proyectos from "./pages/proyectos/Proyecto";


function App() {
  return (
    <>
      <main>
        <NavbarMain/>
        <HeroMain />
        <AboutMeMain />
        <Habilidades/>
        <Proyectos/>
        <Footer />
      </main>
    </>
  );
}

export default App;
