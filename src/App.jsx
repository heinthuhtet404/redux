import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Nav from './components/Nav'
import { useSelector } from 'react-redux'

function App() {
  const isToggled = useSelector((state) => state.auth.isToggled);

  return (
    <>
      <Nav/>
      {
        !isToggled && <Welcome/>
      }
      {
        isToggled && <Counter/>
      }
    </>
  )
}

export default App
