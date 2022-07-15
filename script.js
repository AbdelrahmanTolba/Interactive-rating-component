"use strict";
const submitBtn = document.querySelector(".btn");
const ratingSection = document.querySelector(".rating");
const thankinSection = document.querySelector(".thanking");
const yourRate = document.querySelector(".your__rate");
const rateNum = document.querySelectorAll(".rate__num");

submitBtn.addEventListener("click", function () {
  rateNum.forEach((elm, i) => {
    if (elm.classList.contains("selected")) {
      thankinSection.classList.remove("hidden");
      ratingSection.classList.add("hidden");
      yourRate.textContent = `${i + 1}`;
    } else return;
  });
});
rateNum.forEach((elm) => {
  elm.addEventListener("click", function () {
    if (!elm.classList.contains("selected")) {
      rateNum.forEach((elm) => elm.classList.remove("selected"));
      elm.classList.toggle("selected");
    }
  });
});
