const inventors=[
    {first: "Albert", last:"Einstein", year:1879, passed:1955},
    {first: "Isaac", last:"Newton", year:1643, passed:1742},
    {first: "Galileo", last:"Galilei", year:1564, passed:1642},
    {first: "Marie", last:"Curie", year:1867, passed:1934},
    {first: "Johannes", last:"Kepler", year:1571, passed:1630},
    {first: "Nicolaus", last:"Copernicus", year:1473, passed:1543},
    {first: "Max", last:"Planck", year:1858, passed:1947},
];

const people=['Tory,Emerald','Beck,Emerson', 'Maxwell,Nweke', 'Chisom,Chime', 'Austin,Aghogho', 'Florence,Ariko', 'Faith,Agbor', 'Christabel,Abiri','Lotachi, Lotanna', 'Felina,Burutu', 'Bright,Eyo', 'Bashir,Rasheed', 'Toheeb,Righteousness', 'Joseph,Yeko', 'Jude,Oloya', 'Eloho,Ariko', 'Angel,Blue', 'Raphael,Nwankwo', 'Ally,Rushin', 'Christopher,Okoyomon', 'Ally,Brit', 'Lilith,Orchid'];

//filter: Get a list of inventors born in the 1800's.
const eighteenthCenturyInventors= inventors.filter(inventor => (inventor.year>= 1800));
console.table(eighteenthCenturyInventors)

//map: Get an array of the inventoryof first and last names.
const fullName= inventors.map(item => (item.first+ " " + item.last)) ;
console.log(fullName);

//Create a list of Boulevards in Paris that contain 'de in it's name.
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category= document.querySelector(".mw-category");
// const links=Array.from(category.querySelectorAll('a'));
// const de= links
// .map(link => link.textContent);
//  .filter(streetName =>streetName.includes('de'));


//sort: Sort inventors from youngest to oldest.
const inventorsAge= inventors.sort((a,b) => a.year < b.year ? 1:-1)
console.log(inventorsAge);

//sort: Sort inventors by years lived.
const oldestInventors= inventors.sort((a,b) => ((a.passed-a.year)>(b.passed-b.year ? 1:-1)));
console.log(oldestInventors);

//sort: Sort the people array by last name.
const alphabeticalOrder= people.sort((first, second) => {
    return first<second ? 1:-1
} )
console.log(alphabeticalOrder)

//reduce: How many years did all the inventors live.
const totalAge= inventors.reduce((total,inventor) => {
    return total+(inventor.passed-inventor.year)
} ,total=0);
console.log(totalAge);

//reduce: Sum up the instances of each of these
const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck'];
const transport=data.reduce(function(obj,item) {
    if(!obj[item]){
        obj[item]=0;
    };
    obj[item]++;
    return obj;
},{})
console.log(transport)

