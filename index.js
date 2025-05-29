const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then (data =>{
        showUser(data)
    })
}

const showUser = (users) => {
    // for ( let i = 0 ; i<users.length;i++){
    //     const user = users[i]
    //     console.log(user)
    // }
    const userContainer = document.getElementById('user-data')
    for(const user of users ){
        // console.log(user)
        const newLi = document.createElement("li")
        newLi.innerText = user.name
        userContainer.appendChild(newLi)
    }
}

