import './App.css'
import NavigationBar from './components/NavigationBar'
import MainWelcome from './components/MainWelcome'
import AboutBanner from './components/AboutBanner'
import About from './components/AboutSection'
import ProjectBanner from './components/ProjectBanner'
import ProjectSection from './components/ProjectSection'

function App() {

  return (
    <section className='background'>
      <NavigationBar />
      <MainWelcome />
      <AboutBanner />
      <About />
      <ProjectBanner />
      <ProjectSection />
    </section>
  )
}

export default App
