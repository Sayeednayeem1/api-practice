

const loadData = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayData(data.results));
}

const displayData = users =>{
    const divContainer = document.getElementById('div-container');
    for(const user of users){
        console.log(user);
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('color-me');
        usersDiv.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h1>User Name: ${user.name.title} ${user.name.last} ${user.name.first}</h1>
        <p>Gender: ${user.gender}</p>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city} ${user.location.state} ${user.location.country}</p>
        `;

        divContainer.appendChild(usersDiv);
    }
}

loadData();