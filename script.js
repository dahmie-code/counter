const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
const header = document.querySelector(".header");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", Actions);
});

function Actions(e) {
  const styles = e.currentTarget.classList;

  if (styles.contains("increase")) {
    if (count <= 9) {
      count++;
    }
  } else if (styles.contains("decrease")) {
    if (count >= -9) {
      count--;
    }
  } else {
    count = 0;
  }

  if (count > 0) {
    value.style.color = "#93d823";
    header.style.color = "#93d823";
  }

  if (count < 0) {
    value.style.color = "#e4215c";
    header.style.color = "#e4215c";
  }

  if (count === 0) {
    value.style.color = "#a7a7a7";
    header.style.color = "#a7a7a7";
  }

  value.textContent = count;
}