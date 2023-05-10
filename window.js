const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const btnModalClose = document.querySelector(".close-modal");
const showModals = document.querySelectorAll(".show-modal");

// console.log(showModal);
for (let i = 0; i < showModals.length; i++)
  showModals[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnModalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //   console.log("keyboard is pressing");
  //   console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
