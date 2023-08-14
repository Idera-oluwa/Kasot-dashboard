import React from 'react'
 import {useLocation,BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AccountSettings from './Pages/AccountSettings'
import Homepage from './Pages/homepage'
import Support from './Pages/Support'
import Order from './Pages/Order'

 const AppRoute = ({menuOpen}) => {
  return (
   <Routes>
    <Route path="/" element={<Homepage menuOpen={menuOpen} />}/>
    <Route path="/settings" element={<AccountSettings menuOpen={menuOpen} />}/>
    <Route path="/support" element={<Support menuOpen={menuOpen} />}/>
    <Route path="/orders" element={<Order menuOpen={menuOpen} />}/>
   </Routes>
  )
}


export default AppRoute