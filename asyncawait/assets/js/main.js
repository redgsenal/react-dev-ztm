/* 
    // this function is the same as below async/await below
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(response => response.json())
    .then(posts => console.log({ posts }))
    .catch(error => console.log(error));
*/

const myAsyncFunction = async () => {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await userResponse.json();
        const firstUser = users[0];
        const secondUser = users[1];
        console.log({ users });
        console.log({ firstUser });
        console.log({ secondUser });
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);
        const posts = await postsResponse.json()
        console.log({ posts });
    } catch (err) {
        // errors from inside the try will catch here
        console.log('ooops error caught: ', err);
    } finally {
        console.log('finally here');
    }

}

myAsyncFunction();
console.log('async function was called');
