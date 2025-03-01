import React,{Component} from "react";
class State extends Component{
  state={
    mystring:"afeeda",
    arr:[],
    person:{name:"adhi",age:34}
  }
  handleState=()=>{
  this.setState({
    mystring:"adhila",
    arr:["a","b"],
    person:{name:"afeeda",age:25}
  })


  }
  render(){
    return(
      <div>
        <h1>{this.state.mystring}</h1>
        <h3>{this.props.sendingData}</h3>
      
        <h2>person:{this.state.person.name}age:{this.state.person.age}</h2>
        <button onClick={this.handleState}>chanhege</button>
        {
          this.state.arr.map((item,index)=>{
            return <h1>{item}</h1>
          })
        }
        

    
    
      </div>
    )
  }

}
export default State