const p=document.querySelector('p');
function makeGreen() {
    const p=document.querySelector('p');
    p.style.color='#be25aa';
    p.style.fontSize='50px'
}

const dogs=[{name:'Snickers', age:3}, {name:'Hugo', age:5}]
//regular
console.log('hello');
//interpolated
console.log('Hello, my name is %s Tokyo', '@');
//style
console.log('%c I am a piece of text', 
'font-size:20px;background-color:#ba12e9');
//warning
console.warn('Don\'t annoy me.');
//error
console.error('Don\'t try that again');
//info
console.info('You are entering an official site');
//testing, .assert only fires when the resut is wrong,else, it returns nothing
console.assert(1===1,'that is wrong');//correct, does not return anything
console.assert(p.innerText.includes('OOOHHHH'),'Wrong Selection');//will return 'Assertion failed:Wrong Selection'. If the error text is not provided, it will return 'Assertion failed'
//viewing DOM Elements
console.dir(p);
//groupings
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`)
})
//count
console.count('Juvie');
console.count('Eloho');
console.count('Juvie');
console.count('Eloho');console.count('Juvie');
console.count('Eloho');console.count('Juvie');
console.count('Eloho');console.count('Juvie');
console.count('Eloho');console.count('Juvie');
console.count('Eloho');console.count('Juvie');
console.count('Eloho');
//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data =>{
        console.timeEnd('fetching data');
        console.log(data
            )
    })
console.clear();