const container = document.querySelector(".container");
const all_text = document.createElement("div");
all_text.className = "all_text";
container.appendChild(all_text);

// The Scroll Event.
function initialload() {
  for (let i = 0; i < 25; i++) {
    const post = document.createElement("div");
    post.className = "text";
    post.innerHTML = `<h2>Samiyae Saranam Iyappa ${i + 1}</h2>`;
    all_text.appendChild(post);
  }
}

initialload();
container.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = container;

  if (scrollTop + clientHeight > scrollHeight - 5) {
    setTimeout(createPost, 1000);
  }
});

// window.addEventListener("scroll", () => {
//   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

//   if (scrollTop + clientHeight > scrollHeight - 5) {
//     setTimeout(createPost, 1000);
//   }
// });

let count = 25;
function createPost() {
  for (let i = 0; i < 25; i++) {
    count++;
    const post = document.createElement("div");
    post.className = "text";
    post.innerHTML = `<h2>Samiyae Saranam Iyappa ${count}</h2>`;

    all_text.appendChild(post);
  }
}
