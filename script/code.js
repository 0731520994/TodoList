/*
let list = [
    {
        id: '1',
        name: 'Mongikazi',
        createdDate: 'June 2023',
        completed: '02 June 2023',
    }

*/


// let addItemButton = document.getElementById("adding");
// let taskInput = document.getElementById("input");
// let sortingButton = document.getElementById('sorting');

// addItemButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (taskInput.value) {
//         namelist.push(taskInput.value);
//         taskInput.value = "";
//     }
// });

// localStorage.setItem("names", JSON.stringify(namelist));

// displayName.addEventListener('click'), (e) =>{
//     namelist.forEach(name) =>{
//         e.preventDefault output.innerHTML += 
//         `
//         <li>${mame}</li>`
//     }
// }

// local storage

let arrayname = JSON.parse(localStorage.getItem('arrayname')) || [];

// Render to your array

function functionname() {
    let arrayname = document.getElementById('arrayname');
    arrayname.innerHTML = '';

    // put checkbox code



    

    // find a way to looop through your array



}


// function to save you elementa within the list

function functionname() {
    localStorage.setItem('', JSON.stringify());
}

// function to add item

function addname() {
    let add = document.getElementById('');
    let newitem = add.ariaValueMax.trim();

    // Function to toogle completion


    // Remove completed elements


}


function sortname() {
    // use your sort function to compare 


    // apply some logic

    
    // Call functions


}


// Eventlistners for add and sort


// Initial rendering




const addBtn = document.querySelector('#add-btn');

const sortBtn = document.querySelector('#sort-btn');

const dotoinput = document.querySelector('#todo-input');

const resultDisplay= document.querySelector('#result-display');
let toDo =[];
let temp = 1;

addBtn.addEventListener('click', (event) =>{
event.preventDefault();

if (todolistInput === ' ')

alert ('input is empty')
else{

}

todoList.push({
    id:temptID
    name: todoOutput.value
    completed:falsedate: new Date()

})
}
tempID++;
todovalue

function renderlist(){
    dodolist.array.forEach((item)=> {
       resultDisplay.innerHTML += 
       `
       <div>
        <input type = "checkbox" id =completed${item.id}>
        <p>${item.name}</p>
        <button id= "close-btn${item.id}">x</button>
       </div>` 
    });
}