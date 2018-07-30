
//Object Destructuring

// const person = {
//     name: 'Tyler',
//     age: 24,
//     location: {
//         city: 'State College',
//         temp: 84
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;


// console.log(publisherName);

const address = ['1299 S Juniper Street', 'State College', 'Pennsylvania', '16803'];
const [ , city, state,] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);