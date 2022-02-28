const bottel = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i=0; i<12; i++){} => regular loop
for (const num of numbers){} => for an array
for(const poro in student){} => for an object
*/
for (const prop in bottel) {
    console.log(prop, bottel[prop])
}

const keys = Object.keys(bottel)
// console.log(keys)
for (const prop of keys) {
    console.log(prop)
}

//advanced
const entries = Object.entries(bottel)
for (const [key, value] of Object.entries(bottel)) {
    console.log(key, value);
}