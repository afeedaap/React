import React,{Component} from 'react'
class Control extends Component{
    constructor(props){
        super(props)
            this.state={
                firstName:"",
                lastName:""

            
        }
    }
    onSubmit=()=>{
        console.log(this.state);
    }
    render(){
        return(
            <form action="">
                <h1>form componet</h1>
                <input type="text" name='firstName' value={this.state.firstName} />
                <input type="text" name='lastName' value={this.state.lastName} />
                <button type='button' onClick={this.onSubmit}> submit</button>
            </form>

            
        )
    }
}
export default Control