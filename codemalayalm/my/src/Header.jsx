
import React from 'react'
import Usage from './Usage'
function Header(props){
 const { onMenuSelect}=props

  
    return (
        <div className="app-header">
        <span className="header-title">my Website</span>
        <span onClick={()=>{onMenuSelect('home')}}> | Home</span>
        <span onClick={()=>{onMenuSelect('usage')
        }}> | Usage</span>
        <span onClick={()=>{onMenuSelect('settings')}}> | setting</span>
        <span onClick={()=>{onMenuSelect('Logout')}}> | Logout</span>
      </div>
  
    )
  }


export default Header