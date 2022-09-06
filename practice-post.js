

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => diplayData(data))
}

// display field

function diplayData(posts){

    const dibId = document.getElementById('test');
    dibId.innerText = "";

    for(const post of posts){
        console.log(post);
        const divfield = document.createElement('div');
        divfield.classList.add('style');
        divfield.innerHTML = `
        <h4>Post Title: ${post.title}</h4>
        <p>Post Id: ${post.id}</p>
        <p>Post Body: ${post.body}</p>
        <p>Post UserId: ${post.userId}</p>
        `;
        dibId.appendChild(divfield);
    }

}

loadData();