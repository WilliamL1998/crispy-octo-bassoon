require('dotenv').config();

const key = process.env.API_KEY
const posterURL = "https://image.tmdb.org/t/p/w1280"

const titles = []
const posters = []
const overviews = []

function displayMovie() {
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
}

displayMovie();