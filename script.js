"use strict";
const submitBtn = document.querySelector(".btn");
const ratingSection = document.querySelector(".rating");
const thankinSection = document.querySelector(".thanking");
const yourRate = document.querySelector(".your__rate");
const rateNum = document.querySelectorAll(".rate__num");

submitBtn.addEventListener("click", function () {
  rateNum.forEach((el, i) => {
    if (el.classList.contains("selected")) {
      thankinSection.classList.remove("hidden");
      ratingSection.classList.add("hidden");
      yourRate.textContent = `${i + 1}`;
    } else return;
  });
});
rateNum.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      rateNum.forEach((el) => el.classList.remove("selected"));
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });
});
