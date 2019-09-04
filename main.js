let arrayAdd = document.getElementById('arrayAdd');
let listArray = [];

function addToList() {
    listArray.push(arrayAdd.value);
    console.log(listArray);
    
    let ul = document.getElementById(`ul`);
    let li = document.createElement(`li`);
    
    
    for (i = 0; i < listArray.length; i++) {
        
        ul.appendChild(li);
        li.setAttribute('id', `item${i+1}`);
        
        let listItem = document.getElementById(`item${i+1}`);
        listItem.innerText = `${i+1})  ${listArray[i]}`;
        arrayAdd.value = "";

        

    }
}