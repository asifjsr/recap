const hanadlePost = () => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
    showPost(data)
    }
)
}

const showPost = (posts) => {
    const postContainer = document.getElementById('post-container')
    for(post of posts){
        const div = document.createElement("div");
        div.innerHTML = `
        <h1> ${post.title}</h1>
        <p> ${post.body}</p>
        <button> ${post.id} </button>
        `
        postContainer.appendChild(div)
    }
}