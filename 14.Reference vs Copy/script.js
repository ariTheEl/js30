//start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age=200;
console.log(age, age2);

let name= 'Ari';
let name2= name;
console.log(name,name2);
name='Eloho';
console.log(name,name2);

//lets say we have an array
const players=['Eloho', 'Uche', 'Arnold', 'Kizito'];

//we want to make a copy of it
const team=players;
console.log(players,team);

//you might think we can just do something like this
team[3]='Akhilome';
console.log(team,players);
//team is just a reference to the original array;players. when we update the reference, it will change the original as well

//We can make an actual copy of the original array, that way if we update that copy it will not affect the original.
const team2=players.slice();
team2[3]='Lux';
console.log(team2,players);

//another way to do it is to use the concat() keyword and the ES6 spread
const team3=[].concat(players);
const team4=[...players];
//spread will take every item out of the iterable and put it into the array(or function)
console.log(team3,team4)

//the same thing applies to objects
const person={
    name:'Ariko Eloho',
    age:66
};
const captain= person;
captain.number= 1801;
console.log(person,captain);
//we have updated the person object by updating captain which is a reference
//how to do it
const cap2= Object.assign({}, person,{number:1801, age:12 });
console.log(cap2);

const cap3={...person};
console.log(cap2);
const Eloho={
    name: 'Ariko Eloho',
    age: 55,
    socials:{
        twitter:'Ari-The-El',
        facebook: 'Ariko Eloho'
    }
}
console.log(Eloho);
const dev= Object.assign({}, Eloho);
console.log(dev);
dev.name='Wesley';
console.log(dev);