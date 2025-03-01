import React,{useEffect,useState} from 'react'

export default function Test() {
    useEffect(()=>{
        console.log(" test runiing");
        return()=>{
            console.log("unmout");
        }
      },[])
      
  return (
    <h1>test component</h1>
  )
}
