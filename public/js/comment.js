const newFormHandler = async (event) => {
    event.preventDefault();
    const params = document.location.pathname.split('/');
    const post_id = params[2]
    const description = document.querySelector('#comment').value.trim();
  
    if (post_id && description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {

        alert('Failed to create project');
      }
    }
  };
  
const delButtonHandler = async (event) => {
  console.log(event.target)
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response)
            alert('Failed to delete project');
        }
    }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);