import { useState } from 'react'
import './App.css'
import AccountSettings from './Pages/AccountSettings'
import Sidebar from './sidebar'
import Navbar from './navbar'
import {AiOutlineDashboard} from "react-icons/ai"
import {useNavigate,useLocation} from "react-router-dom"
import AppRoute from './AppRoute'

function App() {

  const {pathname}=useLocation()

  const navigate=useNavigate()

  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuChange = () =>{
    setMenuOpen(!menuOpen)
  }


  return ( 
    <>
    <Sidebar menuOpen={menuOpen} />
    <Navbar handleMenuClose={handleMenuChange} menuOpen={menuOpen} />
<AppRoute menuOpen={menuOpen}/>
</>
  )
}

export default App
