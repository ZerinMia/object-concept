const bottel = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
//getting all properties names 
const keys = Object.keys(bottel);
//get all values 
const values = Object.values(bottel);
// console.log(values)

const pairs = Object.entries(bottel);
console.log(pairs)

Object.seal(bottel);
delete bottel.isCleaned;
console.log(bottel)