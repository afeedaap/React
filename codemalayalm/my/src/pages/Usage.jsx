import React ,{useState,useEffect}from 'react'
import './usage.css'
function Usage() {
//    const arr= useState(0)
//    const [value,setValue]=arr
const [value,setValue]=useState(0)
const [color,setColor]=useState('white')
useEffect(()=>{
    console.log("inside effect"+value+""+color);
    return()=>{
        console.log("cleanupd"+value+""+color);
    }
},[value,color])
  return (
    <div className='usage'>
        <div className="usage-item" style={{background:color}}> 
            <button onClick={()=>{
                setValue((state)=>{
                    return state+1
                })
            }}>incremnt</button>
            <label>{value}</label>
            <button onClick={()=>{
                setValue((state)=>{
                    return state-1
                })
            }}>decrement</button>

        </div>
        <button onClick={()=>{setColor('green')}}>green</button>
        <button onClick={()=>{setColor('blue')}}>blue</button>
    </div>
  )
}

export default Usage