
// ONLINE JSON FETCH 
/*
 const url = 'https://api.jsonsilo.com/demo/320d6c8f-6851-413e-b283-af79a7e2f0df';
  
 const headers = {
    'X-SILO-KEY': 'YOUR_OWN_API_KEY',
    'Content-Type': 'application/json'
  };
 axios.get(url, { headers: headers })
   .then(response => {
     const posts = response.data.posts;
     displayPosts(posts);
   })
   .catch(error => {
     console.error('There was an error with the request:', error);
   });
*/

// LOCAL JSON FETCH

fetch("../../data/posts.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch local JSON: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    displayPosts(data.posts);
  })
  .catch(error => {
    console.error("Error fetching local posts:", error);
  });
  



// FUNCTION TO DISPLAY POSTS
function displayPosts(posts) {
  const section = document.querySelector(".center-main");

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <div class="post-header">
       <div class="author-info">
        <img class="avatar" src="../pictures/profile.png" alt="Avatar">
        <span class="author-name">${post.author}</span>
      </div>
      <span class="date">${post.date.split("T")[0]}</span>
      </div>
      ${post.image ? `<img class="post-image" src="${post.image}" alt="Post image">` : ""}
      <p class="post-text">${post.text}</p>
      <button class="like-btn">👍 ${post.likes}</button>
    `;

    section.appendChild(div);
  });
}
