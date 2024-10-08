const Person = (props) => {
    return React.createElement('li', { key: 'li-1', className: 'person-item' }, [
        React.createElement('h1', { key: 'person-h1', className: 'person-title', 'data-foo': 'foo-1' }, props.name),
        React.createElement('p', { key: 'person-p', className: 'person-occupation', 'data-bar': 'bar-1' }, props.occupation)
    ]);
}

const persons = [
    { name: 'John', occupation: 'carpenter' },
    { name: 'Jill', occupation: 'clerk' },
    { name: 'Kaye', occupation: 'police' }
]

const createPersonElements = (persons) => {
    return React.createElement('ul', { key: 'person-listings' }, persons.map((person, i) => {
        return React.createElement(Person, { key: 'person-' + i, name: person.name, occupation: person.occupation })
    }));
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { key: 'h1-app', className: 'title' }, "React is rendered"), createPersonElements(persons)
    ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
