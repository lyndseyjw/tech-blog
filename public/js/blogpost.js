// in routes, will need to send blogpost (as const received after mapping through array with plain:true), userId:req.session.user_id 

// const commentDiv = document.querySelector('.commentDiv');

// const blogContainer = document.querySelector('.blogContainer')

// const user_id = blogTitle.getAttribute('.data-user');
// const userId = blogContainer.getAttribute('.data-session');

// if (user_id !== userId) {

//     commentDiv.innerHTML = ``

// } else {

    // const response = await fetch(`/api/dashboard/${blogId}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       time_available: timeAvailable,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   if (response.ok) {
    //     //replace document with the same page
    //     document.location.replace('/neighborhood')
    //   } else {
    //     response.json(err);
    //   }
// }

// const commentButton = document.querySelector('.sendComment')
// const blogTitle = document.querySelector('.blogTitle')
// const blogId = blogTitle.getAttribute('data-id')

const commentContent = document.querySelector('.commentContent').value.trim();

function renderComment() {

    const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ commentContent }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        //replace document with the same page
        document.location.replace('/blogpost')
      } else {
        response.json(err);
      }
}

commentButton.addEventListener('click', renderComment)