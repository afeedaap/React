import React,{Component} from 'react'
class Forms extends Component{
    state={
        firstName:"",
        lastName:""
    }
    handleonChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            // firstName:event.target.value,
            // lastName:event.target.value
            [event.target.name]:event.target.value
        })
    }
    onSubmit=(event)=>{
  
        console.log(this.state);
    }
    render(){
        return ( 
            
        <form>
            <h1>form component</h1>
            <label htmlFor="">imput box</label>
            <input name="firstName"value={this.state.firstName} onChange={this.handleonChange} type="text"/>
            <input name='lastName' value={this.state.lastName}type="text"  onChange={this.handleonChange}/>
            <button type="button" onClick={this.onSubmit}>sumbit</button>
        </form>
        )
        
    }
}
export default Forms 