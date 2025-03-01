import React ,{useContext}from "react";
import './Label.css';
import { MyContext } from "./pages/HomePage";
import { useState } from "react";
function Label(props){
    const val=useContext( MyContext);
    const[showTooltip,setShowTooltip]=useState(false)
        
        const style=props.isActive?{background:'green'}:{background:'orange'}
        if(val===false){
            return null
        }
        const handleMouseEnter=()=>{
            setShowTooltip(true)
        }
        const handleMouseLeave=()=>{
            setShowTooltip(false)
        }

        return(

            <div>    
            <span onClick={()=>{ props.onAction(props.isActive?'active':"non-active")}}
            className="list-label-item" style={style} 
            onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
                {props.isActive?'active':'disbled'}</span>
        
        <label className={`tooltip${showTooltip?'show-tooltip':'hide-tooltips'}`}>this is {props.isActive?'Active':'diasbled'}tooltip</label>
          </div>
        )
    }


export default Label