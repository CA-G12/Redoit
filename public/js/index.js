const postsURL = '/post/post/getposts';
// eslint-disable-next-line func-names

const rootDiv = document.getElementById('root');
(function () {
  fetch(postsURL, {
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
<a href="/user/${post.user_id}">${post.user_name}</a>
</div>`;
      });
    }).catch(
      (err) => console.log(err),
    );
}());
