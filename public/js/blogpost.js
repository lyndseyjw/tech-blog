// in routes, will need to send blogpost (as const received after mapping through array with plain:true), userId:req.session.user_id 

const postComment = async(event) => {

  event.preventDefault();
  const id = document.querySelector('.blogTitle').getAttribute('data-id');
  const content = document.querySelector('.commentContent').value.trim();
  
  const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ content, id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      //replace document with the same page
      document.location.replace(`/blogpost/${id}`);
    } else {
      response.json(err);
    }

}

document
  .querySelector('.comment-form')
  .addEventListener('submit', postComment);