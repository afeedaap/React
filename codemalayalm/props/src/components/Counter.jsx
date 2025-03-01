import React, {Component} from 'react'
class Counter extends Component{
    state={
        counter:0
    }
    onIncrement=()=>{
        this.setState({
            counter:this.state.counter+1
        })
        
    }
    onDecrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }    
render(){
    return (
        <div>
        <h1>counterr</h1>
        <h1>{this.state.counter}
        </h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        </div>
    )
}
}
export default Counter
