

// load Data

function loadData (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayData(data))
}

// display data
function displayData (photos){
    const displaySection = document.getElementById('photos-section');

    for(const photo of photos){
        console.log(photo);
        const div = document.createElement('div');
        div.classList.add('color-me');
        div.innerHTML = `
        <img src="${photo.thumbnailUrl}" >
        <h4>Title: ${photo.title}</h4>
        <p>Id: ${photo.id}</p>
        <p>Album Id: ${photo.albumId}</p>
        <a href="${photo.url}"><button id="color-me-btn">Click Me</button></a>
        `;
        displaySection.appendChild(div);
    }
}

loadData();