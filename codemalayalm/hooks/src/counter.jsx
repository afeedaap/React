import React,{useState, memo} from 'react'
function Counter({increment}){
    const ref=React.useRef(0)
    
    console.log(ref.current++);
return(
    <div>
        <button onClick={increment}>incremnet</button>
 
        {/* <button onClick={()=>setCouter(counter-1)}>decremnet</button> */}
    </div>
)
}
export default memo(Counter)