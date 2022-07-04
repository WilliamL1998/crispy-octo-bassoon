var key
const posterURL = "https://image.tmdb.org/t/p/w1280"

var titles = []
var posters = []
var overviews = []

function displayMovie() {
    fetch('/key', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        key = data
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en&region=ca`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (var i = 0; i < data.results.length; i++) {
                titles.push(data.results[i].original_title)
            }
            console.log(titles)
            for (var i = 0; i < data.results.length; i++) {
                posters.push(posterURL + data.results[i].poster_path)
            }
            console.log(posters)
            for (var i = 0; i < data.results.length; i++) {
                overviews.push(data.results[i].overview)
            }
            console.log(overviews)
        })
        .then(populateCards)
    })
}

displayMovie();

function populateCards() {
    for (var i = 0; i < 12; i++) {
        var imgEl = document.getElementById(`poster-${i}`)
        imgEl.setAttribute("src", posters[i])
        var titleEl = document.getElementById(`title-${i}`)
        titleEl.textContent = titles[i]
        var descriptionEl = document.getElementById(`description-${i}`)
        descriptionEl.textContent = overviews[i]
    }
}