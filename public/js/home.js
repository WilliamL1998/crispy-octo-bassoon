function displayMovie() {
    fetch('/populate', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            var imgEl = document.getElementById(`poster-${i}`)
            imgEl.setAttribute('src', data[i].image)
            var titleEl = document.getElementById(`title-${i}`)
            titleEl.textContent = data[i].title
            var descriptionEl = document.getElementById(`description-${i}`)
            descriptionEl.textContent = data[i].description
        }
    })
}

displayMovie();