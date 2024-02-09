import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 import Card from './components/Card'

function App() {
   let myObj = {
    name :"Rohit",
    age: 19
   }

  return (
    <>
       <h1 className='bg-green-700  text-black p-4  rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Chaiaurcode" btnText="Click me"/>
    <Card username="Rohit" btnText="Visit me"/>

    </>
  )
}

export default App
