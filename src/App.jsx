import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <section className='background'>
      <Outlet />
    </section>
  )
}

export default App
