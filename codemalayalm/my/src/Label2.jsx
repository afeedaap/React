import React,{Component} from 'react'
// const  MyContext=React.createContext()
import { MyContext } from "./pages/HomePage";
class Label2 extends Component{
    render(){
        const props=this.props;
        const style=props.isActive?{background:'green'}:{background:'orange'}
        return(
            <MyContext.Consumer>
            {
                (val)=>{
            //   console.log("context valuua"+val);
              if(val===false){
                return null
            }return(
                    <span onClick={()=>{ props.onAction(props.isActive?'active':"non-active")}}
                    className="list-label-item" style={style}>
                        {props.isActive?'active':'disbled'}</span>
            ) 
            }

        }
        
        </MyContext.Consumer>
        )
        

    }
}
export default Label2