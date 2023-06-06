import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <Header/>
  <Body/>
  <Footer/>
</>
  )
}

export default App
