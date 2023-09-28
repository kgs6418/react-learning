import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='  flex flex-wrap justify-center bottom-12 inser-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-2xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-3 rounded-full' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("yellow")} className='outline-none px-3 rounded-full' style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("green")} className='outline-none px-3 rounded-full' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("pink")} className='outline-none px-3 rounded-full' style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>setColor("orange")} className='outline-none px-3 rounded-full' style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-3 rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("violet")} className='outline-none px-3 rounded-full' style={{backgroundColor:"violet"}}>Violet</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
