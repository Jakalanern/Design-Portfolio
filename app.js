const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let count = 0;
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
let resumeImg = document.querySelector(".resume-img");
let email = document.querySelector(".email");
let github = document.querySelector(".github");
let linkedin = document.querySelector(".linkedin");
let scrollBtn = document.querySelector(".scroll-btn");
let dropdownTitle = document.querySelector(".dropdown-title");
let title = document.querySelector(".title");
let image = $(".image");
let slider = $(".slider");
let imageDesc = $(".image-desc");
let gitBtn = $(".github-logo");
let demoBtn = $(".demo-logo");
let prevBtn = $(".previous-btn");
let nextBtn = $(".next-btn");
let projects = [
  {
    id: "1",
    img: "./sites/brick4.png",
    desc: "Fun challenge to re-create the 'Brick-Breaker' game using the canvas element and collision functions!<br><br> I implemented many custom features such as the pause system, pause screen, sounds, sound toggle system with button control, win/loss conditions, score counter, life counter, DARK / LIGHT themes with button control, game difficuly, etc!",
    git: "https://github.com/Jakalanern/Challenge-20-Bricker-Breaker-Game",
    demo: "https://jakalanern.github.io/Challenge-20-Bricker-Breaker-Game",
    alt: "Site 1",
  },
  {
    id: "2",
    img: "./sites/flashcards.png",
    desc: "Flashcard application coded from scratch with Vanilla JS!<br><br> Used an array of objects to store the information of each card, then iterated through them to create new flashcard elements on the page whenever the 'Create Card' form is submitted.<br><br> Each card has a hidden answer which can be revealed with a toggle. Each card is fully editable and removable as well.",
    git: "https://github.com/Jakalanern/Challenge-15-Flash-Card-Challenge",
    demo: "https://jakalanern.github.io/Challenge-15-Flash-Card-Challenge/",
    alt: "Site 1",
  },
  {
    id: "5",
    img: "./sites/tictacotoe - resize.png",
    desc: "Tic-Tac-Toe game made from scratch using Vanilla JS!<br><br> Game includes player name input screens, sound effects, a sound toggle system, score tracking system, scoreboard with player name display, win screen with confetti, loss screen, draw conditions, clear board button, full reset button, and more!",
    git: "https://github.com/Jakalanern/Tic-Tac-Toe",
    demo: "https://jakalanern.github.io/Tic-Tac-Toe/",
    alt: "Tic Tac Toe Game",
  },
  {
    id: "3",
    img: "./sites/budget.png",
    desc: "Budget Calculator coded from scratch using Vanilla JS!<br><br> Features trackable expenses that append themselves to a list. Each expense is fully editable and removable. All expenses added or removed will be calculated into remaining balance based off of the overall budget specified!",
    git: "https://github.com/Jakalanern/Challenge-16-Budget-Application-Intermediate",
    demo: "https://jakalanern.github.io/Challenge-16-Budget-Application-Intermediate/",
    alt: "Site 1",
  },
  {
    id: "4",
    img: "./sites/todo.png",
    desc: "To-do list coded from scratch using Vanilla JS!<br><br> On input, a todo-item is created and appended to a list. Each todo-item can be crossed out, is fully editable, and removable.",
    git: "https://github.com/Jakalanern/Challenge-12-To-Do-List",
    demo: "https://jakalanern.github.io/Challenge-12-To-Do-List/",
    alt: "Site 1",
  },
  {
    id: "6",
    img: "./sites/Chuck Norris.png",
    desc: "Random Joke Generator using an API!<br><br> Used the fetch API to GET, then parsed the response to JSON and used that data to display a random joke on each button press. Taught me an understanding of Promises, AJAX, GET, POST, PUT, DELETE etc...",
    git: "https://github.com/Jakalanern/Random-Joke-Generator-API-Fetch-",
    demo: "https://jakalanern.github.io/Random-Joke-Generator-API-Fetch-/",
    alt: "Site 1",
  },
];

//DEFAULTS
image.src = projects[0].img;
image.alt = projects[0].alt;
imageDesc.innerHTML = projects[0].desc;

prevBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    changeImg(count);
  } else {
    count = projects.length - 1;
    changeImg(count);
  }
});
nextBtn.addEventListener("click", function () {
  if (count < projects.length - 1) {
    count++;
    changeImg(count);
  } else {
    count = 0;
    changeImg(count);
  }
});

gitBtn.addEventListener("click", function () {
  window.open(projects[count].git);
});

demoBtn.addEventListener("click", function () {
  // Take to projects[count].demo
  window.open(projects[count].demo);
});

function changeImg() {
  image.src = projects[count].img;
  image.alt = projects[count].alt;
  imageDesc.innerHTML = projects[count].desc;
}

// setTimeout(function () {
//   window.scrollTo(0, 0);
// }, 50);

dropdownTitle.addEventListener("click", function () {
  window.scrollTo(0, 0);
  xClick();
});

title.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

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

resumeImg.addEventListener("click", function () {
  window.open("Jack Stevens Web Development Resume 2022.pdf");
});

email.addEventListener("click", function () {
  window.location = "mailto:jack.withers.stevens@gmail.com";
});

github.addEventListener("click", function () {
  window.open("https://github.com/Jakalanern");
});

linkedin.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/jack-stevens-889121b1/");
});

mobileContact.addEventListener("mouseover", function () {
  mobileContactA.style.color = "var(--clr-white)";
});

mobileContact.addEventListener("mouseout", function () {
  mobileContactA.style.color = "var(--clr-black)";
});

function burgerClick() {
  dropdownX.style.display = "initial";
  dropdown.style.top = "0%";
  nav.style.color = "var(--clr-white)";
  for (let l of line) {
    l.style.background = "var(--clr-white)";
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.style.background = "var(--clr-white)";
  } else {
    nav.style.background = "transparent";
  }
});

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

  for (let link of dropdownLink) {
    link.style.transform = "translateX(400%)";
  }
  dropdown.style.top = "-100%";
  nav.style.color = "var(--clr-black)";
  for (let l of line) {
    l.style.background = "var(--clr-black)";
  }
}
