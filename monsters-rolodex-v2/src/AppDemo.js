import { useState, useEffect } from 'react'; // react hooks
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// converting class base react to functional base react
const App = () => {
  console.log('render');

  // useState is a hook
  // destructure the variables from useState
  // useState is an array that has a value and a function setValue
  // useState will store only one value at a time
  // useState = [value, setValue]
  const [searchField, setSearchField] = useState('');
  // rename this file to App.js in order to demo paint flash
  // turn on paint flashing in chrome extension
  // it will green flash the changes happening during the DOM reflow process
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log({ searchField });
  console.log({ monsters });

  // useEffect consists of callback function and array to check if it changes
  // useEffect will call the callback on initial render call
  // if anyt of the array change, run the callback function
  // an empty array meant that the callback fuction is called once
  // useEffect(callback(), array[])
  useEffect(() => {
    console.log('useEffect fetch callback');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // call a new filtered monsters whenever changes to monsters or search field
  useEffect(() => {
    console.log('useEffect filtered monsters callback');
    const newFilteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldName = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldName);
  }

  const onTitleChange = (event) => {
    const searchFieldName = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldName);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <h1 className='app-title'>{title}</h1>
      <SearchBox onChangeHandler={onSearchChange} placeHolder='Search Monster Names' className='search-box hello-world' />
      <br />
      <SearchBox onChangeHandler={onTitleChange} placeHolder='Change Title' className='search-box hello-world' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// converted to class Component
/* class App extends Component {
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
}*/
export default App;