const url = window.location.href;
const strs = url.split('/');
const id = strs.at(-1);
const userPostsURL = `/post/post/getpostsforuser/${id}`;
const rootDiv = document.getElementById('root');
fetch(userPostsURL, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json())
  .then((data) => {
    console.log(data);
    // add data to root div
    data.posts.forEach((post) => {
      rootDiv.innerHTML += `<div class="post">
${post.title}
${post.body}
</div>`;
    });
  }).catch(
    (err) => console.log(err),
  );
