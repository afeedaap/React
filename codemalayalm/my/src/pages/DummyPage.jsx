
import React, { Component } from 'react'
 class DummyPage extends Component {
    componentDidMount(){
        console.log("component did moint");
    }
    componentWillUnmount(){
        console.log("compomerr willum mount");
    }

  render() {
  

    return (
      <div>{this.props.name}</div>
    )
  }
}

export default DummyPage