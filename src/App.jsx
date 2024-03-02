import './App.css'
import NavigationBar from './components/NavigationBar'
import MainWelcome from './components/MainWelcome'
import AboutBanner from './components/AboutBanner'
import About from './components/AboutSection'

function App() {

  return (
    <section className='background'>
      <NavigationBar />
      <MainWelcome />
      <AboutBanner />
      <About />
    </section>
  )
}

export default App
