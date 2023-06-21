let colors = ["red", "green", "blue", "black"];

if (window.localStorage.color !== undefined) {
  document.querySelector(".container").style.backgroundColor =
    window.localStorage.color;
  let element = document.querySelector(
    `.option${colors.indexOf(window.localStorage.color) + 1}`
  );
  element.style.opacity = 1;
  element.style.boxShadow = `0px 0px 1vmin .1vmin ${window.localStorage.color}`;
}

for (let i = 0; i < 4; i++) {
  document.querySelector(`.option${i + 1}`).onclick = function () {
    document.querySelectorAll(".option").forEach((element) => {
      element.style.opacity = 0.5;
      element.style.boxShadow = "none";
    });
    this.style.opacity = 1;
    this.style.boxShadow = `0px 0px 1vmin .1vmin ${colors[i]}`;
    document.querySelector(".container").style.backgroundColor = colors[i];
    window.localStorage.color = colors[i];
  };
}
