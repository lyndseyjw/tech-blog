const newBlogpostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();

    const response = await fetch(`/api/blogpost`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/dashboard`);

    } else {
        alert('Failed to create blogpost');
    }
};

document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newBlogpostHandler);