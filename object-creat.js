//using object literal 
const student = { name: 'sakib al  object', job: 'cricket' }
//constractor
const person = new Object();
console.log(person);

//3.
/* const human = Object.create(null);
const human = Object.create(student); */
// console.log(human.job );

//4. syntactical sugar
class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new people('manus', 12);
// console.log(peop);

//function
function Manush(name) {
    this.name = name;
}
const man = new Manush('kader');
console.log(man)