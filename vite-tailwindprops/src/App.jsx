import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import{useState} from 'react';
import Card from'./components/Card'

function App() {
  const [count, setCount] = useState(0)
  let name='chai aur code'
  let obj={
    name:"gaurav",
    "id":"123kgs",
    "mobile":12345678
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card name={name} person={obj} btnText='click'/>
      <Card name='coffee aur code'btnText='click me'/>
     
    </>
  )
}

export default App
