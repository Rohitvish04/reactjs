 import {useState} from "react"

function App() {
      const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200   " style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 shadow-lg rounded-full" style={{backgroundColor: "red"}}>Red</button>

            <button onClick={() => setColor("green")} className="outline-none px-4 shadow-lg rounded-full" style={{backgroundColor: "green"}}>Green</button>

            <button onClick={() => setColor("blue")} className="outline-none px-4 shadow-lg rounded-full" style={{backgroundColor: "blue"}}>Blue</button>

            <button onClick={() => setColor("pink")} className="outline-none px-4 shadow-lg rounded-full" style={{backgroundColor: "pink"}}>Pink</button>

            <button onClick={() => setColor("purple")} className="outline-none px-4 shadow-lg rounded-full" style={{backgroundColor: "purple"}}>Purple</button>

            <button onClick={() => setColor("orange")} className="outline-none px-4 shadow-lg rounded-full" style={{backgroundColor: "orange"}}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
