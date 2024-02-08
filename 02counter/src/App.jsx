import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  //  let counter= 5

  let addValue = (  ) =>{
    // console.log("value add,", counter);
      // counter = counter + 1;
       if (counter < 20) {
        setCounter(counter + 1)
       }
      
        
  }

  let removeValue =() => {
    if(counter > 0){
      setCounter(counter -1)
    }
     
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter vaule: {counter}</h2>
 
       
      <button onClick={addValue}>Add Vaule {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
