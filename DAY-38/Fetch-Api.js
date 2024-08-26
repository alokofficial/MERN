fetch('https://api.github.com/users/alokofficial_')
    .then((response)=>{
        if(!response.ok){
            throw new Error('Something went wrong', response.status)
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err.message)
    })