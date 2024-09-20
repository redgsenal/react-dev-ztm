const Person = props => {
    return React.createElement('li', { key: props.key, className: 'person-item', 'data-key': props.key }, [
        React.createElement('h1', { className: 'person-title', 'data-foo': 'foo-1' }, props.name),
        React.createElement('p', { className: 'person-occupation', 'data-bar': 'bar-1' }, props.occupation)
    ]);
}

const persons = [
    { key: 1, name: 'John', occupation: 'carpenter' },
    { key: 2, name: 'Jill', occupation: 'clerk' },
    { key: 3, name: 'Kaye', occupation: 'police' }
]

const createPersonElements = (persons) => {
    return React.createElement('ul', {}, persons.map((person, i) => {
        return React.createElement(Person, { key: person.key, name: person.name, occupation: person.occupation })
    }));
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, "React is rendered"), createPersonElements(persons)
    ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
