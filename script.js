dropdownBtn = document.querySelector(".dropdown");
dropdownList = document.querySelector(".dropdown-list");
chevronElement = document.querySelector(".chevron");

dropdownBtn.addEventListener("click", () => {
  if (dropdownList.classList.contains("visible")) {
    chevronElement.style.transitionDuration = "0.3s";
    chevronElement.style.transform = "rotate(0deg)";
  } else {
    chevronElement.style.transitionDuration = "0.3s";
    chevronElement.style.transform = "rotate(180deg)";
  }

  dropdownList.classList.toggle("visible");
});

window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    if (dropdownList.classList.contains("visible")) {
      dropdownList.classList.remove("visible");
      chevronElement.style.transitionDuration = "0.3s";
      chevronElement.style.transform = "rotate(0deg)";
    }
  }
};
