const handleLoadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            displayuser(data)
        }  )
}
const displayuser = (users) =>{
    console.log(users[0])
}