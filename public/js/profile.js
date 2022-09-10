const url = window.location.href;
const strs = url.split('/');
const id = strs.at(-1);
const userPostsURL = `/post/post/getpostsforuser/${id}`;
const rootDiv = document.getElementById('root');
const popUpContainer = document.querySelector('.actual-post .popUp');
const inputCreatePost = document.querySelector('.create-post input');
const textArea = document.querySelector('.actual-post textarea');
const savePost = document.querySelector('.actual-post button');
inputCreatePost.addEventListener('click', () => {
  popUpContainer.classList.add('active');
});
savePost.addEventListener('click', () => {
  popUpContainer.classList.remove('active');
});
textArea.addEventListener('input', () => {
  if (textArea.value) {
    savePost.classList.add('active');
  } else {
    savePost.classList.remove('active');
  }
});
console.log(textArea);
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
      rootDiv.innerHTML += `<div class="actual-post">
      <div class="vote-container">
                        <img class='upvote' src="../assets/UpVote.svg" alt="">
                        <span>4</span>
                        <img class='downvote' src="../assets/UpVote.svg" alt="">
                    </div>
                    <div class="content">
                        <div class="title-container">
                            <img src="../assets/palestine.png" alt="">
                            <a href="#">${post.title}</a>
                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="_3hh-iGjzOv78L_7t_PUHev"><path d="M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"></path><path d="M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"></path></svg>
                            <div class="text-container">
                          
                                <span class="cross">Crossposted by</span>
                                <a href="#">u/s_y_s_t_e_m_i_c</a>
                                <span class="hours"> 10 hours ago</span>
                            </div>
                        </div>
                        <span class="actual-content">${post.body}</span>
                        <div class="svgs-container">
                            <div class="comment box">
                                <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/alOd-wLdD-n.png&quot;); background-position: 0px -209px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                <span>1 Comment</span>
                            </div>
                            <div class="awards box">
                                <ion-icon name="gift-outline"></ion-icon>
                                <span>Awards</span>
                            </div>
                            <div class="share box">
                                <i class="fa-sharp fa-solid fa-share"></i>
                                <span>Share</span>
                            </div>
                            <div class="save box">
                                <i class="fa-regular fa-bookmark"></i>
                                <span>Save</span>
                            </div>
                            <i class="fa-solid fa-ellipsis dots"></i>
                        </div>
                    </div>
      </div>`;
    });
  }).catch(
    (err) => console.log(err),
  );
