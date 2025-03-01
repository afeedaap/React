import React,{  useState,useRef, useCallback} from 'react'

import Counter from './counter'
function App(){
  const [counter,setCounter]=useState(0)
  const increment=useCallback(()=>{
    setCounter((currentCounter)=>currentCounter+1)
  })
  return (
    <div>
      <li>{counter}</li>
    {/* <Counter increment={()=>setCounter(counter+1)}/> */}
    <Counter increment={increment}/>
    </div>
  )
}

export default App
