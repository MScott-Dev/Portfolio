import './App.css'
import NavigationBar from './components/NavigationBar'
import MainWelcome from './components/MainWelcome'
import AboutBanner from './components/AboutBanner'
import About from './components/AboutSection'
import ProjectBanner from './components/ProjectBanner'
import ProjectSection from './components/ProjectSection'
import ContactBanner from './components/ContactBanner'
import Contact from './components/Contactpage'
import ResumeBanner from './components/ResumeBanner'
import Resume from './components/ResumeSection'


function App() {

  return (
    <section className='background'>
      <NavigationBar />
      <MainWelcome />
      <AboutBanner />
      <About />
      <ProjectBanner />
      <ProjectSection />
      <ContactBanner />
      <Contact />
      <ResumeBanner />
      <Resume />
    </section>
  )
}

export default App
