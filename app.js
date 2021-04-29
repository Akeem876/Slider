const sovCenters = [
 {
  img: "/imgs/sovBoulivard.jpg",
  location: "Sovereign Boulevard",
  address: "301 Washington Blvd, Kingston",
  description:
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio est vero repellendus dolores ratione libero fugit quibusdam in  provident autunde expedita impedit alias",
 },
 {
  img: "/imgs/sovKignston.jpg",
  location: "Liguanea",
  address: "106 Hope Rd, Kignston",
  description:
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio est vero repellendus dolores ratione libero fugit quibusdam in  provident autunde expedita impedit alias",
 },
 {
  img: "/imgs/sovNorth.jpg",
  location: "Barbican",
  address: "29 Barbican Rd, Kingston",
  description:
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio est vero repellendus dolores ratione libero fugit quibusdam in  provident autunde expedita impedit alias",
 },
 {
  img: "/imgs/sovVillage.jpg",
  location: "Portmore",
  address: "Shopping mall in Portmore, Jamaica",
  description:
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio est vero repellendus dolores ratione libero fugit quibusdam in  provident autunde expedita impedit alias",
 },
];

const container = document.querySelector(".whole-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const sovs = sovCenters
 .map((sov, indexOf) => {
  const { img, location, address, description } = sov;
  let position = "next";
  if (indexOf === 0) {
   position = "active";
  }
  if (indexOf === sovCenters.length - 1) {
   position = "last";
  }
  return `<article class="slider-container ${position}">
 <div class="silder">
  <img class="img" src="${img}" alt="${location}" />
  <div class="desc">
   <h3 class="location">${location}</h3>
   <h4 class="address">${address}</h4>
   <p>
    ${description}
   </p>
  </div>
 </div>
</article>`;
 })
 .join("");

container.innerHTML = sovs;

const startSlide = (type) => {
 const active = document.querySelector(".active");
 const last = document.querySelector(".last");
 let next = active.nextElementSibling;
 const lastNext = last.previousElementSibling;

 if (!next) {
  next = container.firstElementChild;
 }

 active.classList.remove(["active"]);
 next.classList.remove(["next"]);
 last.classList.remove(["last"]);

 if (type === "prev") {
  last.classList.add("active");
  active.classList.add("next");
  next = last.previousElementSibling;

  if (!next) {
   next = container.lastElementChild;
  }
  next.classList.remove(["next"]);
  next.classList.add("last");
  return;
 }

 active.classList.add("last");
 next.classList.add("active");
 last.classList.add("next");
};

prevBtn.addEventListener("click", () => {
 startSlide("prev");
});
nextBtn.addEventListener("click", () => {
 startSlide();
});
// console.log(sovs);
