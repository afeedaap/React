import React, { Component } from 'react'

 class List extends Component {
    state={
        score:5,

        data:[
            {
        
            id:1,
            name:"afeeda",
            age:28
            },
            {
        
                id:2,
                name:"afsal",
                age:32
                },
                
        ]
    }
    incrementScore=()=>{
        this.setState({
            score:10
        })
    }
    // componentDidMount(){
    //     alert("running")
    //     console.log("runningg");
  
        
    // }
    // componentWillUnmount(){

    // }
  render() {
    console.log(this.state.score);
    return (
      <div>
    
        <ul>
            <h1>list</h1>
        {this.state.data.map((value,index)=>(
            
                
          <li key={value.id}>{value.id}-{value.name}-{value.age}</li>
          
        ))}
        </ul>
        <button onClick={this.incrementScore}>incremnet score</button>
        </div>
    )
  }
}
export default List