import React,{ useState } from 'react'
import State from './hooks/state'

function App() {
const[name,setName]=useState("afeeda")
const[email,setEmail]=useState("")
// const resetName=()=>{
//   setName("")
// }
  return (
    <div> 

     <h1>welcome {name}</h1> 
     <State name={name}/>
     <button onClick={()=>setName("")}>reset</button>
    </div>
  )
}

export default App
