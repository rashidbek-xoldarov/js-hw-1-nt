const input = document.querySelectorAll(".form-input");
const title = document.querySelectorAll(".info-content");
const elBtn = document.querySelector(".form-btn");
const elResetBtn = document.querySelector(".info-btn");

elBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let work = 1;
  for (i = 0; i < input.length; i++) {
    if (input[i].value) {
      work *= 1;
    } else {
      work *= 0;
    }
  }
  if (work) {
    input.forEach((item, index) => {
      if (index == 4) {
        console.log(item.value);
        let sum = item.value * 11000;
        title[index].textContent = sum;
      } else {
        title[index].textContent = item.value;
      }
    });
  } else {
    alert("Please, fill all blank!!!");
  }
  if (work) {
    input.forEach((item) => {
      item.value = "";
    });
  }
});

elResetBtn.addEventListener("click", function () {
  location.reload();
});
