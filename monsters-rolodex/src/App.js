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
          <button
            // any changes to the objects state will trigger virtual dom updates
            // setState will look at the state object and look for the key-value changes
            // from
            // onClick={() => {
            // this.setState(
            // {
            // name: { firstName: 'James', lastName: 'Jones' },
            // greetings: 'Good day!'
            // }
            // console.log(this.state);
            // );
            // the state might not be updated at this point
            // cos state is an asynchronous; meaning at this point it might o not already change
            // the chnage value is still ongoing;
            // solution: pass it as a callback or as a function
            onClick={() => {
              this.setState(
                // state parameter
                (state, prop) => {
                  console.log('state:', state);
                  console.log('prop:', prop);
                  // return and shallow merge to the this.state object
                  return {
                    name: { firstName: 'James', lastName: 'Jones' },
                    greetings: 'Good day!'
                  };
                },
                // callback function after the state updated
                () => {
                  console.log(this.state);
                }
              );
            }}>
            Change Name
          </button>
        </header>
      </div >
    );
  }
}
export default App;
