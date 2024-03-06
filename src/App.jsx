import './App.css'
import NavigationBar from './components/NavigationBar'
import MainWelcome from './components/MainWelcome'
import About from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Contact from './components/Contactpage'
import Resume from './components/ResumeSection'


function App() {

  return (
    <section className='background'>
      <NavigationBar />
      <MainWelcome />
      <About />
      <ProjectSection />
      <Contact />
      <Resume />
    </section>
  )
}

export default App
