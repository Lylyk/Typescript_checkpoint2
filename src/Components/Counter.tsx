import React, { Component } from 'react';


//Create an interface for state count
interface State {
    count : number
} 

class Counter extends Component { 
state:State = {
 count: 0
 }  

increment = () => {
 this.setState({ count : this.state.count + 1 }) 
} 

render() { 
return (
    <div> 
        <p>Count : {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
    </div>
    )  
 }
} 
export default Counter 