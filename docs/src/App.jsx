import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {

  return (
    <div id="app">
      <NavBar />
      <div id="wrapper" >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
