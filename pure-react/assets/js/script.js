const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'person-title', 'data-foo': 'foo-1' }, props.name),
        React.createElement('p', { className: 'person-occupation', 'data-bar': 'bar-1' }, props.occupation)
    ]);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, "React is rendered"),
        React.createElement(Person, { name: 'John', occupation: 'carpenter' }, null),
        React.createElement(Person, { name: 'Jill', occupation: 'clerk' }, null),
        React.createElement(Person, { name: 'Kaye', occupation: 'police' }, null),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));