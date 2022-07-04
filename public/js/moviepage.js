const newReview = async (event) => {
    event.preventDefault();
    const reviewTitle = document.querySelector('.movie-name').value;
    const reviewText = document.querySelector('#review-text').value;

    if (reviewTitle && reviewText) {
        const response = await fetch (`/review/newReview`, {
            method: 'POST',
            body: JSON.stringify({reviewTitle, reviewText}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok){
            document.location.reload();
        } else {
            alert('Failed to add Review');
        }
    }
}

document.querySelector('#submit-review').addEventListener('submit', newReview);
