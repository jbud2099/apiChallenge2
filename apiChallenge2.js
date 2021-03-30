const key = "YhbgPGwADpH0RBioqvKbrlW8Mr90TGow"

const searchForm = document.querySelector('.d-flex');
const submitBtn = document.querySelector('.btn btn-outline-success');
const searchTerm = document.getElementById('searchTerm');

// const gifList = document.getElementById('gifList');

searchForm.addEventListener('submit', fetchResults)

function fetchResults() {
    console.log(searchTerm.value)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=YVeUWJKONZlv0tt6VEPKYh59Yhd4VqEd&q=${searchTerm.value}&limit=25&offset=0&rating=g&lang=en`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
        return displayResults(json)
    })
    
} 

displayResults = (json) => {
    let gif = json.data[1].embed_url
    console.log(gif)
    let image = document.getElementById('gif')
    image.src=gif
}