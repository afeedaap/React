import React,{  useState,useRef} from 'react'

import './App.css'
import { useForm } from './useForm'
import Test from './Test'
import Counter from './counter'
function App() {
  const inputRef=useRef()
const [name,setName]=useState("")
const [count,setCount]=useState(0)
const[email,setEmail]=useState("")
const [showTest,setshowTest]=useState(true)
const [value,handleChange]=useForm({
  name:"",email:""
})
// useEffect(()=>{
//   console.log("runiing");
// },[value.name])

const resetName=()=>{
  setName("")
}
const accessRef=()=>{
  console.log(inputRef.current);
}
console.log(value.name);
console.log(value.email);
console.log("paremntt");
  return (
    <div>
      {showTest?<Test/>:null}
      <button onClick={()=>setshowTest(!setshowTest)}> toggle</button>
      <h1>welcome{name}</h1>
      {/* <button onClick={resetName}> reset</button> */}
      <button onClick={()=>setName("")}>reset</button>
      <div>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <label >{count}</label>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      </div>
      <div>
        <form action="" autoComplete='off'>
        <input type="text" ref={inputRef} name='name' value={value.name} onChange={handleChange} />
        <input type="text" name='email' value={value.email} onChange={handleChange}/>

      </form>
      <button onClick={accessRef}>reff</button>
  
      </div>
      <Counter/>
    </div>
  )
}

export default App
