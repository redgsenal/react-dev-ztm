import { Component } from 'react';
import './App.css';

// converted to class Component
class App extends Component {
  // initial function run first
  // constructors always runs first
  constructor() {
    // calls the constructor of the parent component class
    super();

    // state is always a JSOn object
    // key: value form
    // probably most of the time, set the state
    this.state = {
      monsters: []
    }
    console.log('constructor: ', 1);
  }

  // this method is called whenever the component is mounted; 1st time rendered on the page / DOM; run once
  // after render, 3rd to run is componentDidMount is called next (life cycles)
  componentDidMount() {
    console.log('componentDidMount: ', 3);
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
  // render is called 2nd after constructor
  // render what to show (mount this)
  // this might call again whenever the state changes
  render() {
    console.log('render: ', 2);
    return (
      <div className="App">
        <input className='search-box'
          type='search'
          placeholder='Search Monsters by Name'
          onChange={
            (event) => {
              console.log(event.target.value);
              const searchName = event.target.value.toLocaleLowerCase();
              // best practice; non-modifying methods; if an array needs to be modified, create a new array
              const filteredMonsters = this.state.monsters.filter(
                (monster) => {
                  return monster.name.toLocaleLowerCase().includes(searchName)
                });
              this.setState(() => {
                return { monsters: filteredMonsters };
              })
            }
          } />
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
