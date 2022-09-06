function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}

// 
function displayData(users){
    const usersDiv = document.getElementById('list');
    usersDiv.textContent = '';
    for(const user of users){
        const ol = document.createElement('li');
        // ol.innerText = '';
        ol.innerHTML = `
        
        <h1>User Name Is: ${user.name}</h1>
        
        `;
        usersDiv.appendChild(ol);
    }

}