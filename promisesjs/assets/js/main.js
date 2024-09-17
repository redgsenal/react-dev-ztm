const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is now resolved')
    }, 1000);
});

// promises can then chain in a series of then(s)
myPromise
    .then(resolvedValue => resolvedValue + '. Wow great!')
    .then(resolvedValue => console.log(resolvedValue))
    .catch(rejectValue => console.log(rejectValue));

// a promise called; see Appendix section
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => console.log(users))
    .catch(error => console.error(error))