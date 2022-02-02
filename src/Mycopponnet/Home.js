import React, { Component } from 'react';
import './style.css';
export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count:0
      }
    }
      handleIncrement =() =>{
          this.setState({
              Count : this.state.Count +1
          })
      }
      handleDncrement =() =>{
        this.setState({
            Count : this.state.Count -1
        })
    }
    
  render() {
      const{Count}=this.state
    return <div>
       <h1 className="ashik">Count : {Count}</h1> 
       <button onClick={this.handleIncrement}>+</button>
       <button className="tt" onClick={this.handleDncrement} disabled={Count===0 ? true : false}>-</button>
    </div>;
  }
}
