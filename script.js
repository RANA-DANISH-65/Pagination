const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const preNexBtns = document.querySelectorAll(".preNex");
const numbers = document.querySelectorAll(".link");
const divs = document.querySelectorAll(".box");

let currentStep = 0;

const updateBtn = () => {
  if (currentStep === 4) {
    endBtn.disabled = true;
    preNexBtns[1].disabled = true;
  } else if (currentStep === 0) {
    startBtn.disabled = true;
    preNexBtns[0].disabled = true;
  } else {
    startBtn.disabled = false;
    preNexBtns[0].disabled = false;
    endBtn.disabled = false;
    preNexBtns[1].disabled = false;
  }
};

const updateDivs = () => {
  divs.forEach((div, index) => {
    if (index === currentStep) {
      div.classList.add("display");
      div.classList.remove("hide");
    } else {
      div.classList.add("hide");
      div.classList.remove("display");
    }
  });
};

numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep = numIndex;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");
    updateDivs();
    updateBtn();
  });
});

preNexBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "preBtn") {
      if (currentStep > 0) {
        currentStep -= 1;
      }
    } else if (e.target.id === "nexBtn") {
      if (currentStep < numbers.length - 1) {
        currentStep += 1;
      }
    }
    document.querySelector(".active").classList.remove("active");
    numbers[currentStep].classList.add("active");
    updateDivs();
    updateBtn();
  });
});

startBtn.addEventListener("click", () => {
  currentStep = 0;
  document.querySelector(".active").classList.remove("active");
  numbers[0].classList.add("active");
  updateDivs();
  updateBtn();
  endBtn.disabled = false;
  preNexBtns[1].disabled = false;
});

endBtn.addEventListener("click", () => {
  currentStep = 4;
  document.querySelector(".active").classList.remove("active");
  numbers[4].classList.add("active");
  updateDivs();
  updateBtn();
  startBtn.disabled = false;
  preNexBtns[0].disabled = false;
});

// Initialize the first div to be displayed
updateDivs();
updateBtn();
