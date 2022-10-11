"use strict";

const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const btns = document.querySelectorAll(".show-modal");

const openM = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeM = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", openM);
}

close.addEventListener("click", closeM);
overlay.addEventListener("click", closeM);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeM();
  }
});
