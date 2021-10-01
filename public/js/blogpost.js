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


// const blogId = blogTitle.getAttribute('data-id')

// const newButton = document.querySelector('.new-blogpost');
// const newBlogpost = document.querySelector('.blogpost-content').value.trim();


const sessionUserId = document.querySelector('.blogContainer').getAttribute('data-session');
const userId = document.querySelector('.blogTitle').getAttribute('data-user');

const blogContainer = document.querySelector('.blogContainer')
const blogTitle = document.querySelector('.blogTitle')
const blogContent = document.querySelector('.blogContent')

const blogTitleAttr = blogTitle.getAttribute('data-title')
const blogContentAttr = blogContent.getAttribute('data-content')
const blogId = blogTitle.getAttribute('data-id')

const editContainer = document.querySelector('.editContainer')
const commentContainer = document.querySelector('.comment-container')

console.log(sessionUserId)
console.log(userId)

if (sessionUserId === userId) {

  console.log('inside if, not else')
  commentContainer.innerHTML = '';
  editContainer.innerHTML = '';
  editContainer.innerHTML = `<button class="btn btn-primary editButton" type="submit">Edit Post</button>`;

  const editBlogpost = async(event) => {

    blogContainer.innerHTML = '';
    blogContainer.innerHTML = `<form class="form editblog-form">
    <div class="form-group">
      <label for="blogpost-title"></label>
      <input class="form-input blogpostTitle" type="text" placeholder="${{blogTitleAttr}}" />
    </div>
    <div class="form-group">
      <label for="blogpost-content"></label>
      <input class="form-input blogpostContent" type="text" placeholder="${{blogContentAttr}}" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary updateBlogpost" type="submit">Submit</button>
    </div>
    </form>`

    const putBlogpost = async(event) => {

      event.preventDefault();

      const title = document.querySelector('.blogpostTitle')
      const content = document.querySelector('.blogpostContent')

      if (event.target.matches('.updateBlogpost')) {
        const response = await fetch(`/api/blogpost/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify({ 
              title: title,
              content: content, 
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            //replace document with the same page
            location.reload();
          } else {
            response.json(err);
          }
        }
    }

    blogContainer.addEventListener('click', putBlogpost)
  }

  editContainer.addEventListener('click', editBlogpost)

} else {

  editContainer.innerHTML = '';
  commentContainer.innerHTML = '';
  commentContainer.innerHTML = `<form class="form comment-form">
    <div class="form-group">
      <label for="comment-content">Comment</label>
      <input class="form-input commentContent" type="text" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary sendComment" type="submit">Submit</button>
    </div>
    </form>`

  const postComment = async(event) => {

    event.preventDefault();
    const commentContent = document.querySelector('.commentContent').value.trim();

    if (event.target.matches('.sendComment')) {
      const response = await fetch(`/api/comment`, {
          method: 'POST',
          body: JSON.stringify({ commentContent }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          //replace document with the same page
          location.reload();
        } else {
          response.json(err);
        }
      }
  }
  commentContainer.addEventListener('click', postComment);
}
// async function createNew() {

//   const response = await fetch(`/dashboard/new`, {
//     method: 'POST',
//     body: JSON.stringify({ newBlogpost }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   if (response.ok) {
//     //replace document with the same page
//     location.reload();
//   } else {
//     response.json(err);
//   }
// }


// newButton.addEventListener('click', createNew);