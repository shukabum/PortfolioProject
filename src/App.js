import React from 'react'
import "./App.scss"

import About from './components/about/About'

import Contacts from './components/contacts/Contacts' 

import { Routes ,Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'



const App = () => {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
    </Routes>
    
    </>
  )
}

export default App
