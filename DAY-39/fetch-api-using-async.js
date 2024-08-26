async function fetchData(url){
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const data=await response.json();
        console.log(data)
    }catch(err){
        console.log(err.message)
    }
}
fetchData('https://api.github.com/users/alokofficial')// Success
// fetchData('https://api.github.com/users/alokofficiall')// Error