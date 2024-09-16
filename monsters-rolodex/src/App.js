import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// converted to class Component
class App extends Component {
  // initial function run first
  constructor() {
    // calls the constructor of the parent component class
    super();

    // state is always a JSOn object
    // key: value form
    this.state = {
      name: 'Reggie',
      greetings: 'Have a nice day!'
    }

  }

  // render() function tells what is the content
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello There!!!</p>
          <p>{this.state.greetings}</p>
          <p>Hi {this.state.name}</p>
          <button>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}
export default App;
