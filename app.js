const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const _=require('lodash');
let example = _.fill([1,2,3,4,5],"banana",1,4);
console.log(example);

eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event fired');
    console.log(num1 + num2)
});


eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
christina.on('name', () => {
    console.log('my name is ' + christina.name);
})
pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name');

/*console.log('Hello World from Nodejs');
const tutorial = require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject()); */
