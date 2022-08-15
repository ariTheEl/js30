const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
//will try to get items from local storage, if it is not in the local storage then it makes use of the empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

//by default, forms will reload a page or send data to an external source, .preventDefault will prevent the form from reloading
function addItem(e) {
    e.preventDefault();

    //the text variable below selects the input with name = item inside the form denoted by this
    const text = (this.querySelector('[name = item]')).value;

    //create an object to store the users entry
    const item = {
        text,
        done: false
    };

    //will push the users entry into the items array
    items.push(item);
    populateList(items, itemsList);
    //the first parameter, 'items' is the key in the localStorage, items is the data.  localStorage only accepts strings. JSON.stringify will convert the items array to string format for storage
    localStorage.setItem('items', JSON.stringify(items));

    //recall this in the line of code below refers to the form, and forms have a .reset method that refreshes the page and clears the form
    this.reset();
};

//populateList takes in two parameters; a list of plates to populate and a place to put the html
function populateList(plates=[], platesList) {
    //where i represents the index, any variable name may be used
    platesList.innerHTML= plates.map((plate,i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id='item${i}' ${plate.done ? 'checked' : "_"}/>
                <label for="item${i}">${plate.text}</label>
            </li>    
        `   
    }).join(' ');
}


function toggleDone(e) {
    if (!e.target.matches('input')) return 
    const el= e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

//when we refresh the page, the list is cleared. We will use local staorage to store the list so it persists after refreshing the page. Local Storage is an object in the browser that is a list of things that have been saved. It allows us to save text to the browser that we can grab the text when we reload. Access the local storage in the local storage under the application tab.

