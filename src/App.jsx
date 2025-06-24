import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Nav from './components/Nav'
import { useSelector } from 'react-redux'
import Todo from './components/Todo'

function App() {
  const isToggled = useSelector((state) => state.auth.isLogin);

  return (
    <>
      <Nav/>
      {
        !isToggled && <Welcome/>
      }
      {
        isToggled && <Counter/>
      }
      <Todo/>
    </>
  )
}

export default App
