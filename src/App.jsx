import { useState } from 'react'
import './App.css'
import AccountSettings from './Pages/AccountSettings'
import {AiOutlineDashboard} from "react-icons/ai"
import {useNavigate,useLocation} from "react-router-dom"
import AppRoute from './AppRoute'

function App() {

  const {pathname}=useLocation()

  const navigate=useNavigate()

  return (
<AppRoute/>
  )
}

export default App
