// load Data

function loadData(){

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayData(data))
}

// display field

function displayData (details){
    const section = document.getElementById('section');
    
    for(const detail of details){
        const divField = document.createElement('div');
        divField.classList.add("color-me");

        divField.innerHTML = `
        <h4>Title: ${detail.title}</h4>
        <p>Id: ${detail.id}</p>
        <p>Users Id: ${detail.userId}</p>
        `;
        section.appendChild(divField);

    }
}


loadData();