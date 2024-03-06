import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'


function App() {

  return (
    <section className='background'>
      <NavigationBar />
      <Outlet />
    </section>
  )
}

export default App
