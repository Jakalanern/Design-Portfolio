let burger = document.querySelector(".burger");
let line = document.querySelectorAll(".line");
let dropdown = document.querySelector(".dropdown");
let dropdownLink = document.querySelectorAll(".dropdown-link");
let dropdownX = document.querySelector(".dropdown-x");
let intro = document.querySelector(".intro");
let projectImg = document.querySelectorAll(".project-img");
let demoLink = document.querySelectorAll(".demolink");
let codeLink = document.querySelectorAll(".codelink");
let projectBtn = document.querySelectorAll(".project-btn");
let nav = document.querySelector("nav");

intro.style.opacity = 1;

burger.addEventListener("click", function () {
  dropdownX.style.display = "initial";
  dropdown.style.top = "0%";
  nav.style.color = "white";
  for (let l of line) {
    l.style.background = "white";
  }

  setTimeout(function () {
    setTimeout(function () {
      dropdownLink[0].style.transform = "translateX(0)";
      dropdownLink[0].style.transition = "transform 0.5s ease, opacity 1.1s";

      dropdownLink[0].style.opacity = "1";
      setTimeout(function () {
        dropdownLink[1].style.transform = "translateX(0)";
        dropdownLink[1].style.transition = "transform 0.5s ease, opacity 1.1s";

        dropdownLink[1].style.opacity = "1";

        setTimeout(function () {
          dropdownLink[2].style.transform = "translateX(0)";
          dropdownLink[2].style.transition =
            "transform 0.5s ease, opacity 1.1s";

          dropdownLink[2].style.opacity = "1";

          setTimeout(function () {
            dropdownLink[3].style.transform = "translateX(0)";
            dropdownLink[3].style.transition =
              "transform 0s ease, opacity 1.25s";

            dropdownLink[3].style.opacity = "1";
          }, 300);
        }, 100);
      }, 125);
    }, 150);

    console.log("link transform");
  }, 0);
});

dropdownX.addEventListener("click", function () {
  setTimeout(function () {
    dropdownLink[3].style.transition = "transform 0s ease, opacity .2s";
    dropdownLink[3].style.opacity = "0";

    setTimeout(function () {
      dropdownLink[2].style.transform = "translateX(300%)";
      dropdownLink[2].style.transition = "transform 0.5s ease, opacity .2s";

      dropdownLink[2].style.opacity = "0";

      setTimeout(function () {
        dropdownLink[1].style.transform = "translateX(300%)";
        dropdownLink[1].style.transition = "transform 0.5s ease, opacity .2s";

        dropdownLink[1].style.opacity = "0";

        setTimeout(function () {
          dropdownLink[0].style.transform = "translateX(300%)";
          dropdownLink[0].style.transition = "transform 0.5s ease, opacity .2s";

          dropdownLink[0].style.opacity = "0";
        }, 150);
      }, 125);
    }, 100);
  }, 0);

  setTimeout(function () {
    dropdown.style.top = "-100%";
    nav.style.color = "black";
    for (let l of line) {
      l.style.background = "black";
    }
  }, 500);
});
