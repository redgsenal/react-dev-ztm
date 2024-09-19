import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

// converted to class Component
class App extends Component {
  // this is the parent component and is render first
  // initial function run first
  // constructors always runs first
  constructor() {
    // calls the constructor of the parent component class
    super();

    // initialize this.state with the following variables with its corresponding initialized values
    // state is always a JSOn object
    // key: value form
    // probably most of the time, set the state
    this.state = {
      monsters: [],
      searchField: ''
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
        // when its resolved, do this
        return { monsters: users }
      },
        // when is reject, do this
        () => { console.log(this.state) }
      ));
  }

  // optimize this function so that its stored and reuse later inside render
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  // render() function tells what is the content
  // render is called 2nd after constructor
  // render what to show (mount this)
  // this might call again whenever the state changes
  render() {
    console.log('render: ', 2);
    // pull and separate object variables from ' this' and 'this.state'
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // best practice; non-modifying methods; if an array needs to be modified, create a new array
    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      }
    );
    console.log('filtered monsters: ', filteredMonsters);

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeHolder='Search Monster Names' className='search-box hello-world' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;