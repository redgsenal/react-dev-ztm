const myArray = [1, 2, 3, 4, 5];

const myAlphas = ['a100', 'a1', 'a2', 'a63', 'a4', 'a5'];
const people = [{ name: 'Greg', age: 18 }, { name: 'Dan', age: 51 }, { name: 'Gary', age: 12 }, { name: 'Will', age: 81 }, { name: 'Pat', age: 10 }];
// map()
console.log('myArray: ', myArray);
const m2 = myArray.map(n => n + 1);
const m3 = myArray.map(n => "w");
console.log(m2);
console.log(m3);

// filter
const f1 = myArray.filter(n => n < 4);
const f2 = myArray.filter(n => !(n < 4));
console.log('f1:', f1);
console.log('f2:', f2);

// reduce
const r1 = myArray.reduce((accumulator, currElement) => accumulator + currElement, 0);
console.log('r: ', r1); //15
const r2 = myArray.reduce((accumulator, currElement) => accumulator + currElement, 10);
console.log('r: ', r2); // 25

// find; gets the first element where the resulting condition is true
const s1 = myAlphas.find(el => el.startsWith('a1'));
console.log(s1);
const s2 = myAlphas.find(el => el.startsWith('a6'));
console.log(s2);
const s3 = myAlphas.find(el => el.startsWith('a4'));
console.log(s3);
const firstOldPersonFound = people.find(person => person.age < 50);
console.log('First Old Person Found:', firstOldPersonFound);
const firstYoungPersonFound = people.find(person => person.age < 15);
console.log('First Young Person Found:', firstYoungPersonFound);

// includes
const b1 = myArray.includes(4);
console.log('b1: ', b1);
const b2 = myArray.includes(2, 1);
console.log('b2: ', b2);

// understanding by object reference
const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };
const o4 = { id: 4 };
const o5 = { id: 5 };
const myArray2 = [o1, o2, o3, o4, o5];
const b3 = myArray2.includes({ id: 3 });
console.log('b3: ', b3); // always false 
const b4 = myArray2.includes(el => el.id == 3);
console.log('b4: ', b4); // still false
// but if you search by obj in memory reference
const b5 = myArray2.includes(o1);
console.log('b5: ', b5); // now true

