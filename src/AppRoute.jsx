import React from 'react'
 import {useLocation,BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AccountSettings from './Pages/AccountSettings'
import Homepage from './Pages/homepage'

 const AppRoute = () => {
  return (
   <Routes>
     <Route path="/settings" element={<AccountSettings/>}/>
    <Route path="/" element={<Homepage/>}/>
   </Routes>
  )
}


export default AppRoute