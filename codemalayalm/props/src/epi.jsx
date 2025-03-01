import React, { Component } from 'react'
import SampleComponent from './sampleComponent'
class App extends Component
 {
 state={
  mystring:"afeedannnnnnnn",
  ischeck:"afsal"

  }
  handleChange=()=>{
    this.setState({
      mystring:'afeedaafsal'
    })
  }
render(){


  return (
    <div>
      <h1>hello {this.state.mystring}{this.state.ischeck}</h1>
      <button onClick={this.handleChange}>change text</button>
      <SampleComponent sendingData={this.state.mystring}/>
   
    </div>
    
  )

}
}

export default App
// import React,{Component} from 'react'
// class SampleComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>dddddd</h1> 
//                 <h1>{this.props.sendingData}</h1></div>
//         )
//     }

// }
// export default SampleComponent