const ratingBtns = document.querySelectorAll(".gradeBtn");
const rating = document.querySelector(".rating");
const submitBtn = document.querySelector(".submitBtn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const errorMessage = document.querySelector(".error-message");
// Taking care of the active choice

console.log(ratingBtns);
let choice = 0;

[...ratingBtns].forEach((btn) =>
  btn.addEventListener("click", function () {
    [...ratingBtns].forEach((btn) => btn.classList.remove("active-grade"));
    btn.classList.add("active-grade");
    choice = btn.textContent;
  })
);

submitBtn.addEventListener("click", function () {
  if (choice === 0) {
    errorMessage.classList.add("shown");
  } else {
    errorMessage.classList.remove("shown");
    ratingCard.classList.remove("active-card");
    thankYouCard.classList.add("active-card");
    rating.textContent = ` ${choice} `;
  }
});
