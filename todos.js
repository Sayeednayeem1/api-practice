

// fetch

function loadData(){

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayData(data))
}

// 
function displayData(todos){

    const sectionContainer = document.getElementById('section');
    sectionContainer.textContent = '';

    for(const todo of todos){
        console.log(todo);
        const createDiv = document.createElement('div');
        createDiv.classList.add('color-me');
        createDiv.innerHTML = `
        
        <h4>Title: ${todo.title}</h4>
        
        <p>Id: ${todo.id}</p>
        
        <p>User Id: ${todo.userId}</p>
        `;
        sectionContainer.appendChild(createDiv);
    }

}

loadData();