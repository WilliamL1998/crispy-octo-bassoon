document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    const newReview = async (event) => {
        event.preventDefault();
        const movieId = document.querySelector('.movie-id').innerHTML;
        const reviewText = document.querySelector('#review-text').value;
    
        // if (movieId && reviewText) {
            const response = await fetch (`/api/reviews/newreview`, {
                method: 'POST',
                body: JSON.stringify({movie_id: movieId, review: reviewText}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok){
                document.location.reload();
            // } else {
            //     alert('Failed to add Review');
            // }
        }
    }
    
    document.querySelector('#submit-review').addEventListener('click', newReview);
  })

