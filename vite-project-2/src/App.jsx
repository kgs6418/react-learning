import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[number,setNumber]=useState(false)
  const[character,setCharacter]=useState(false)
  const[password,setPassword]=useState("")

  /////////////// useRef  hook /////////////////
  const passwordRef= useRef(null)

/////////////// useCallback hook /////////////////
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str=str+"0123456789"
    }else if(character){
      str=str+"~!@#$%^&*-_=+"
    }

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
     
    }
    setPassword(pass)
    
  
  },[length,number,character,setPassword])

/////////////// useEffect hook /////////////////
 useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])

 const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current.select()
  window.navigator.clipboard.writeText(password)
 },[password])

 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10  p-5 text-back-700 bg-red-400'>
      <h1 className='text-4xl text-center color text-black'>Password generator</h1>

      <div className=' flex shadow rounded-lg overflow-hidden mb-4 mt-5'>
        <input type="text"
               className="outline-none w-full py-1 px-3"
               value={password} 
               placeholder='password'  
               readOnly
               ref={passwordRef}/>

        <button onClick={copyPasswordToClipboard}
                className='outline-none bg-blue-600 px-3 py-2 hover:bg-sky-700 ' >Copy</button>
      </div>
    
      <div className='flex text-sm gap-x-2'>

        <div className='flex item-center gap-x-3'>
          <input type="range" 
                min={8} mar={100} 
                value={length} className='cursor-pointer' 
                onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length:{length}</label>
        </div>

        <div className='flex text-sm gap-x-2'>
         <input type="checkbox" 
               defaultChecked={number} 
               id='numberInput'
               onChange={()=>{
                    setNumber((prev)=>!prev)}}/>
         <label>Number{number}</label>
        </div>

        <div className='flex text-sm gap-x-2'>
          <input type="checkbox" 
                 defaultChecked={character} 
                 id='characterInput'
                 onChange={()=>{
                    setCharacter((prev)=>!prev)}}/>
          <label>Character{character}</label>
        </div>
      
      </div>
      
    </div>
      
    </>
  )
}

export default App
