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
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Frank'
        },
        {
          name: 'Jacky'
        },
        {
          name: 'Bob'
        }
      ]
    }
  }

  // render() function tells what is the content
  render() {
    return (
      <div className="App">
        {
          // check appendix 1 on maps
          this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}
export default App;
