// in routes, will need to send blogpost (as const received after mapping through array with plain:true), userId:req.session.user_id 

// const commentDiv = document.querySelector('.commentDiv');
// const blogTitle = document.querySelector('.blogTitle')
// const blogContainer = document.querySelector('.blogContainer')

// const user_id = blogTitle.getAttribute('.data-user');
// const userId = blogContainer.getAttribute('.data-session');

// if (user_id !== userId) {

//     commentDiv.innerHTML = ``

// } else {

//     const blogId = blogTitle.getAttribute('data-id')

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

const commentButton = document.querySelector('.sendComment')

function renderComment() {

    // we will request all comments for this blog post
    const response = await fetch(`/api/comment`, {
        method: 'GET',
        body: JSON.stringify({
          time_available: timeAvailable,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        //replace document with the same page
        document.location.replace('/neighborhood')
      } else {
        response.json(err);
      }
}

commentButton.addEventListener('click', renderComment)