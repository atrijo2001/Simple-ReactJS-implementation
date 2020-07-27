import React, { Component } from 'react';
import './App.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

import Person from "./Person/Person";

class App extends Component{
  state = {
    persons: [
      {name: 'Atrijo', age: 19},
      {name: 'Snehinh', age: 20},
      {name: 'Shubho', age: 38}
    ]
  }

  switchNameHandler = (newname) => {
    //console.log("Has clicked");
    // DO NOT update the state directly over here.
    this.setState({
      persons: [
        {name: newname, age: 19},
        {name: 'Snehinh', age: 20},
        {name: 'Shubho', age: 38}
      ]
    });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Atrijo', age: 19},
        {name: event.target.value, age: 20},
        {name: 'Shubho', age: 38}
      ]
    });
  }
  render(){
    return(
      <div className="App">
        <h1>Hi I am a React app.</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Atrijo Gangopadhyay')}>Switch</button>
        <Person name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Atrijo!!')}
          changed = {this.nameChangedHandler}>My hobbies: Music</Person>
        <Person name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    )}
}

export default App;
