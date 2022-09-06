
// load data

function loadData (){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))
}

// display Data

function displayData(datas){
    const sectionContainer = document.getElementById('comments');

    for(const data of datas){
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('color-me');
        div.innerHTML = `
        
        <h4>Name: ${data.name}</h4>
        <p>PostId: ${data.postId}</p>
        <p>Id: ${data.id}</p>
        <p>Email: ${data.email}</p>
        <p>Id: ${data.id}</p>
        <p>Body: ${data.body}</p>

        `;
        sectionContainer.appendChild(div);

    }
}

loadData();