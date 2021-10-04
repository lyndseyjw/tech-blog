// in routes, will need to send blogpost (as const received after mapping through array with plain:true), userId:req.session.user_id 

const postComment = async(event) => {

  event.preventDefault();
  const content = document.querySelector('.commentContent').value.trim();

  if (event.target.matches('.sendComment')) {
    const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        //replace document with the same page
        console.log('hey')
        location.reload();
      } else {
        response.json(err);
      }
    }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', postComment);