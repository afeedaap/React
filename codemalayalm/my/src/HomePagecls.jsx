
import React, { Component } from 'react'
import SimpleList from '../SimpleList'
import Tools from '../Tools';
import JustInfo from '../JustInfo';
const  MyContext=React.createContext()
 class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            activeState:'all',
            showLabel:true
        }
    }
    componentDidMount(){
      console.log("component did mount............");
      fetch('/data.json')
      .then((data)=>{
       return data.json()
      })
      .then((data)=>
        {this.setState({
        data:data
      })})
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.message!==this.state.message){
        this.setState({
          message:'message'
        })
      }
      console.log("component did update hommee");

    }
    // componentWillUnmount(){
    //   console.log("componet will mount home");

    // }
    onListChange=(event)=>{
        console.log(event.target.value);
    let value=event.target.value
    this.setState({
        // data:newList,
        activeState:value
    },)
      }
    handleDelete=(item)=>{
      console.log('deleteee',item);  
      const newList=this.state.data.filter((element)=>element.id!==item.id)
      this.setState({
        data:newList
      })
    }
    handleLabelClick=(arg)=>{
    this.setState({
        activeState:arg
    })
    }
  handleShowLabel=(evt)=>{
    this.setState({
      showLabel:evt.target.checked
    })
  }

  render()
   {
    console.log("renderr homme");
 const {data,activeState}=this.state
  
      const newList=data.filter((item)=>{
        if(activeState==='all'){
          return true
        }
        if(activeState=='active'){
          return item.isActive===true;
        }
        if(activeState==='non-active'){
          return item.isActive===false;
      
        }
        return false;
      
      
      
      })
     
    console.log("renderrr");
    return (
     < div>
     <div >
      <input checked={this.state.showLabel} onChange={this.handleShowLabel} type="checkbox"></input>show Label
     </div>
     <MyContext.Provider value={this.state.showLabel}>
        <Tools labelValue={activeState}onAction={this.onListChange}>
       <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete}/>
        </Tools>
        </MyContext.Provider>
        <JustInfo/>
        </div>
    )
  }
}

export default HomePage
export{
  MyContext
}