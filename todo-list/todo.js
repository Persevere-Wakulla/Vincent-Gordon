// ************VARIABLES ******************
const darkMode = document.querySelector('.light-image');

const modeImg = document.querySelector('.mode-switch');

const switchelem = document.querySelector('.switch');

const alert = document.querySelector('.alert');

const form = document.querySelector('.style-check');

const textArea = document.getElementById('textArea');

const text2 = document.querySelector('.text-area');

const textAreas = document.getElementById('tat');

const submitBtn = document.querySelector('.submit-btn');

const container = document.querySelector('.list-container');

const list = document.querySelector('.todo-list');

const clearBtn = document.querySelector('.clear-btn');

const sectionControl = document.querySelector('.section-control');

const clrcompleted = document.querySelector('.clear-completed');

const todoInput = document.querySelector('.todo-input');

let counterelem = document.getElementById('counter');

const compElem = document.querySelector('.completed');

//******* LIBRARIES ********************************
const imgLib = [' ./images/icon-moon.svg', ' ./images/icon-sun.svg', './images/icon-check.svg',];

let allItems = []

let activeItems = []

let completeItems = [];

//****** EVENT LISTENERS *****************

 //Submit Forms
form.addEventListener('click', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);

compElem.addEventListener('click', completedList);
const allElem = document.querySelector('.all');
allElem.addEventListener('click', allItemList);
const activeElem = document.querySelector('.active');
activeElem.addEventListener('click', activeItemList);
switchelem.addEventListener('click', imageSwap);
clrcompleted.addEventListener('click', clearcompletedArray);
submitBtn.addEventListener('click',(e) => {
    const element=  e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.textContent;
    allItems.push(element)
    console.log(allItems);
})
// load items
window.addEventListener('DOMContentLoaded', setupItems);
// edit option
let editElement;
let editFlag = false;
let editID = "";
let counter = 0;
// ******** FUNCTIONS ***********
function imageSwap(e) {
    document.documentElement.classList.toggle('dark')
};


function addItem(e) {
    e.preventDefault();
    console.log(textArea.value);
    const value = textArea.value;
    const id = new Date().getTime().toString();
    // adding item to list where we are not editing if edit flag is false
    if (value && !editFlag) {
// if the value is not empty and im not editing
        createListItem(id, value);
        // display aleert
        displayAlert('Item added to the list', 'success');
        // show container
        container.classList.add('show-container');
        // add to local storeage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
        //where we are editing if edit flag is true
    } else if (value && editFlag) {
        // if value is not empty and i am editing
        editElement.innerHTML = value;
        displayAlert('Value changed', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }
        //if the user hasn't added any kind of values
    else {
        // empty value
        displayAlert('Please enter value', 'danger');
    }
};
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function () {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)

    }, 1500)
}

// clear  items
function clearItems() {
    const items = document.querySelectorAll('.todo-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('Empty list', 'danger')
    setBackToDefault();

    localStorage.removeItem('list');
    counterelem.textContent = counter = 0
}
// clear Completed Item array
function clearcompletedArray() {
    completeItems = []
    allItems = []
    activeItems =[]
}
// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('Item removed', 'danger');
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
    counterelem.textContent = counter -= 1
}
// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //    set edit item
    editElement = e.currentTarget.parentElement.firstChild.nextSibling.nextSibling
    console.log(element);
    console.log(editElement);
    // set form value
    text2.value = editElement.innerHTML
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.firstChild.src = imgLib[2]
}
// set back to default
function setBackToDefault() {
    textArea.value = '';
    editFlag = false;
    editID = '';
    submitBtn.firstChild.src = imgLib[2]
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const item = { id, value };
    let items = getLocalStorage()


    items.push(item);
    localStorage.setItem('list', JSON.stringify(items))
}
function addToCompletedLocalStorage(id, value) {
    const completeditem = { id, value };
    let items = getCompletedLocalStorage()


    items.push(completeditem);
    localStorage.setItem('completedlist', JSON.stringify(items))
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items))
}
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}
function getCompletedLocalStorage() {
    return localStorage.getItem('completedlist') ? JSON.parse(localStorage.getItem('completedlist')) : [];
}
// localStorage API
// setItem
// getItem
// removeItem
// save as strings
// localStorage.setItem('orange', JSON.stringify(['item','item2']));
// const oranges = JSON.parse(localStorage.getItem('orange'));
// localStorage.removeItem('orange')
// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}
// Active items filter
function activeItemList(e) {
 const element = e.currentTarget.parentElement.parentElement;
 console.log(text2.value);
}
function allItemList(e) {


}
// Completed Items Filter
function completedList(arr, id, value) {
    // add class
    list.replaceChildren([]);
    const element = document.createElement('article');
    element.classList.add('todo-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    console.log(completeItems);
    for (let i = 0; i < completeItems.length; i++) {
        let element = document.createElement('article');
        element.classList.add('todo-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <div class="todo-input2 text-area2">
  <button type="button" class="style-check2 completed-btn"><img src="./images/icon-check.svg" alt="check"></button><p class="value-paragraph">${completeItems[i]}</p> <button class="edit-btn" type="button">
            <i class="fas fa-edit"></i>
          </button><button type="button" class="style-cross2 delete-btn " ><img src="./images/icon-cross.svg" alt="check" class="cross-position"
    ></button>
</div> `;
        list.appendChild(element)
    }
    completeItems = []
    console.log(completeItems);
}
function createListItem(id, value) {
    const element = document.createElement('article');
    // add class
    element.classList.add('todo-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <div class="todo-input2 text-area2">
  <button type="button" class="style-check2 completed-btn"><img src="./images/icon-check.svg" alt="check"></button><p class="value-paragraph">${value}</p> <button class="edit-btn" type="button">
            <i class="fas fa-edit"></i>
          </button><button type="button" class="style-cross2 delete-btn " ><img src="./images/icon-cross.svg" alt="check" class="cross-position"
    ></button>
</div> `;
    // delete button
    const deletebtn = element.querySelector('.delete-btn');
    deletebtn.addEventListener('click', deleteItem)
    // edit button
    const editbtn = element.querySelector('.edit-btn');
    editbtn.addEventListener('click', editItem)
    // completed button
    const completed = element.querySelector('.completed-btn')
    let valueParagraph = element.querySelector('.value-paragraph');
    completed.addEventListener('click', function () {
        let count = 0
        if (count < 1) {
            valueParagraph.classList.toggle('strike')
            completeItems.push(value)
            setTimeout(() => {
                element.innerHTML = '',
                    counterelem.textContent = counter -= 1

            }, 100)

        }
    })
    // append child to grocery list
    counterelem.textContent = counter += 1
    list.appendChild(element);
}