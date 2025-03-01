import React, { useEffect } from 'react'
import Label2 from './Label2'
import './ListItem.css';
function ListItem(props){

  const{title,descr,isActive,onDelete,onLabelClick}=props
  // console.log(props);
  // useEffect(()=>{
  //   console.log("HELOO" +title);
  // })
    return(
        <div className="list-item">
        <hr />
        <div className="list-title">
          <h4>{title}</h4>
          <label  onClick={onDelete}>Delete</label>
        </div>
        
        <div className="list-descr">
          {  descr}
        </div>
        <div className="list-label" >
          <Label2  isActive={isActive} onAction={onLabelClick}/>
       

        </div>
        <hr/>
      </div> 
    );
}
export  default ListItem