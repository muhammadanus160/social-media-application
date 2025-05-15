// SIGNUP
if (document.getElementById("signupForm")) {
    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "login.html";
    });
  }
  
  // LOGIN
  if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const storedUser = JSON.parse(localStorage.getItem("user"));
  
      if (storedUser && email === storedUser.email && password === storedUser.password) {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }
  
  // DASHBOARD - POST CREATE
  if (document.getElementById("postForm")) {
    document.getElementById("postForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const post = {
        picture: document.getElementById("picture").value,
        price: document.getElementById("price").value,
        model: document.getElementById("model").value
      };
  
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.href = "posts.html";
    });
  }
  
  // POSTS DISPLAY
  if (document.getElementById("postsContainer")) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const container = document.getElementById("postsContainer");
  
    posts.forEach(post => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${post.picture}" width="200"><br>
        <strong>Price:</strong> ${post.price}<br>
        <strong>Model:</strong> ${post.model}<br>
        <button disabled>Add to Cart</button><hr>
      `;
      container.appendChild(div);
    });
  }
  
  // LOGOUT FUNCTIONALITY
if (document.getElementById("logoutBtn")) {
    document.getElementById("logoutBtn").addEventListener("click", function () {
      // Optionally clear all storage or just redirect
      // localStorage.removeItem("user"); // agar sirf user data hatana ho
      // ya puri local storage clean karni ho to:
      // localStorage.clear(); // sab data delete karega
  
      window.location.href = "login.html";
    });
  }
  