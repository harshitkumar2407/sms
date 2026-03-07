import { useState } from 'react'
import './App.css'
import Hero from './component/landingPage/Hero'
import Navbar from './component/navbar'
import Company from './component/landingPage/CompanyCards'
import Features from './component/landingPage/Features'

function App() {

  return (
    <div>
      <Hero />
      <Company />
      <Features />
    </div>
  )
}

export default App
