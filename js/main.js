
const photos = [
  [
    "帝國製糖廠歷史建築",
    "images/building.jpg",
    "帝國製糖廠臺中營業所",
  ],
  [
    "星泉湖自然景觀",
    "images/lake.jpg",
    "帝國製糖廠臺中營業所",
  ],
];

const grid = document.getElementById("galleryGrid");
const pages = document.getElementById("pages");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let page = 1;
const perPage = 2;
function render() {
  grid.innerHTML = photos
    .slice((page - 1) * perPage, page * perPage)
    .map(
      ([title, url, credit]) =>
        `<figure class="gallery-card"><img src="${url}" alt="${title}" loading="lazy" onerror="this.src='images/photo-placeholder.svg'"><figcaption>${title}<small>照片來源：${credit}</small></figcaption></figure>`,
    )
    .join("");
  pages.innerHTML = [1, 2]
    .map(
      (n) =>
        `<button class="${page === n ? "current" : ""}" aria-label="第${n}頁" data-page="${n}">${n}</button>`,
    )
    .join("");
  prev.disabled = page === 1;
  next.disabled = page === 2;
}
pages.addEventListener("click", (e) => {
  if (e.target.dataset.page) {
    page = Number(e.target.dataset.page);
    render();
  }
});
prev.onclick = () => {
  if (page > 1) {
    page--;
    render();
  }
};
next.onclick = () => {
  if (page < 2) {
    page++;
    render();
  }
};
render();
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.onclick = () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
};
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
