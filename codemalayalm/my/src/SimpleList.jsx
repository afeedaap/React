import React from 'react'
import ListItem from './listItem';
function SimpleList(props) {
    const {data,onAction,onLabelClick}=props
  return (
    <div className='app-list'>
        
    {
  data.map((obj=>{
return <ListItem 
key={obj.title} 
title={obj.title}
description={obj.descr}
 isActive={obj.isActive}
 onLabelClick={onLabelClick}
 onDelete={()=>{
   onAction(obj)
 }} />
   }))

}         
    
   
 
 
   </div>
    
  )
}
export default SimpleList;
