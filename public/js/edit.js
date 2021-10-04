const editBlogpostHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('.editBlogpost').getAttribute('data-id');
  const title = document.querySelector('.title').value.trim();
  const content = document.querySelector('.content').value.trim();

  const response = await fetch(`/api/blogpost/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/blogpost/${id}`);
  } else {
    alert('Failed to update blogpost');
  }
};
  
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blogpost');
    }
  }
};

document
  .querySelector('.edit-blogpost-form')
  .addEventListener('submit', editBlogpostHandler);

document
  .querySelector('.deleteBlogpost')
  .addEventListener('click', delButtonHandler);