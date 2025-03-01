
import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage'
import DummyPage from './pages/DummyPage';
import Usage from './pages/Usage';
class MyApp extends Component {
    constructor(props){
        super(props);
        this.state={
            currentSelected:'home'
        }
    }
  handleMenuSelect=(value)=>{
console.log(value);
this.setState({
    currentSelected:value
})
  }
  getPage(){
const{currentSelected}=this.state
switch (currentSelected) {
    case 'home':
        
       return <HomePage/>

       case 'usage':
        
       return <Usage />

       case 'settings':
        
       return <DummyPage key="settings" name="settings"/>
       case 'logout':
        
       return <DummyPage key="logout" name="logout"/>


    default:
        break;
}
  }

  render() {
    return (
      <div>

      <Header onMenuSelect={this.handleMenuSelect}/>
       <div className="app-body">
         {this.getPage()}
      </div>
       
      <Footer/>
    
     </div>
    )
  }
}

export default MyApp