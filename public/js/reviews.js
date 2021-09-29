const newFormHandler = async (event) => {
  event.preventDefault();
  var vidId = document.location.pathname
  vidId = vidId.split('/');
  vidId = vidId[2];

  const review_description = document.querySelector('#review-desc').value.trim();
  if (review_description) {
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({ videogame_id: vidId, review_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create review');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('You can only delete your own reviews.');
    }
  }
};

document
  .querySelector('.new-review-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.reviews-list')
  .addEventListener('click', delButtonHandler);