const people = [
    {name:'Wes', year:1988},
    {name:'Kait', year:1986},
    {name:'Irv', year:1970},
    {name:'Lux', year:2015}
]

const comments=[
    {text:'Love this', id:523423},
    {text:'Super good', id:823423},
    {text:'You are the best', id:2039842},
    {text:'Okpa is my best food', id:123523},
    {text:'Nice,Nice,Nice', id:542328}
]

//Some and Every Checks
//Array.prototype.some() Is at least one person 19 years old
const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
console.log({isAdult})
        
//Array.prototype.every()  Is ev eryone 19?
const allAdult= people.every(person => (new Date().getFullYear() - person.year) >=19 );
console.log({allAdult});

//Array.prototype.find()
//find is like filter but it returns only one instance of what you're looking for
//find a comment with an id of 542328
const comment = comments.find(tag => tag.id===542328);
console.log(comment.text)

//Array.prototype.findIndex
//Find the comment with an id of 542328
const index=comments.findIndex(comment => comment.id===542328);
console.log(index);
//Delete the comment with an id of542328
comments.splice(index,1)
console.log(comments)


