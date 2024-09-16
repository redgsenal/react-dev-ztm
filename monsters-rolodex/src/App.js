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
      name: { firstName: 'Reggie', lastName: 'Senal' },
      greetings: 'Have a nice day!',
      company: 'ACME Co.'
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
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}</p>
          <p>Welcome to {this.state.company}</p>
          <button onClick={() => {
            // any changes to the objects state will trigger virtual dom updates
            // setState will look at the state object and look for the key-value changes
            this.setState({
              name: { firstName: 'James', lastName: 'Jones' },
              greetings: 'Good day!'
            });
            console.log(this.state);
          }}>
            Change Name
          </button>
        </header>
      </div >
    );
  }
}
export default App;
