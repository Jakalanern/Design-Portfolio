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
let mobileContact = document.querySelector(".mobile-contact");
let mobileContactA = document.querySelector(".mobile-contact-a");

intro.style.opacity = 1;

burger.addEventListener("click", function () {
  burgerClick();
  dropdownAnim();
});

dropdownX.addEventListener("click", function () {
  xClick();
});

for (let link of dropdownLink) {
  link.addEventListener("click", function () {
    xClick();
  });
}

mobileContact.addEventListener("mouseover", function () {
  mobileContactA.style.color = "white";
});

mobileContact.addEventListener("mouseout", function () {
  mobileContactA.style.color = "black";
});

function burgerClick() {
  dropdownX.style.display = "initial";
  dropdown.style.top = "0%";
  nav.style.color = "white";
  for (let l of line) {
    l.style.background = "white";
  }
}

function dropdownAnim() {
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
        dropdownLink[2].style.transition = "transform 0.5s ease, opacity 1.1s";

        dropdownLink[2].style.opacity = "1";

        setTimeout(function () {
          dropdownLink[3].style.transform = "translateX(0)";
          dropdownLink[3].style.transition =
            "border 0.25s, color 0.25s, background 0.25s, transform 0s, opacity 1.25s, scale 0.25s";

          dropdownLink[3].style.opacity = "1";
        }, 300);
      }, 100);
    }, 125);
  }, 150);
}

function xClick() {
  for (let link of dropdownLink) {
    link.style.transition = "opacity .5s";
    link.style.opacity = 0;
  }

  setTimeout(function () {
    for (let link of dropdownLink) {
      link.style.transform = "translateX(400%)";
    }
    dropdown.style.top = "-100%";
    nav.style.color = "black";
    for (let l of line) {
      l.style.background = "black";
    }
  }, 0);
}
