import { Component } from 'react';
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
      monsters: []
    }
  }

  // this method is called whenever the component is mounted; 1st time rendered on the page / DOM; run once
  componentDidMount() {
    // a promise called; see Appendix section
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => { console.log(this.state) }
      ));
  }

  // render() function tells what is the content
  render() {
    return (
      <div className="App">
        {
          // check appendix 1 on maps
          this.state.monsters.map((monster) => {
            return <div key={monster.name}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}
export default App;
