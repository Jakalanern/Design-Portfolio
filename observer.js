const projectImgs = document.querySelectorAll(".project-img");

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInLeft");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInLeft");
    }
  });
});

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInUp");
    }
  });
});

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__zoomIn");
    }
  });
});

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInUp");
    }
  });
});

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInUp");
    }
  });
});

// Tell the observer which elements to track

for (let projectImg of projectImgs) {
  observer1.observe(projectImg);
}
observer2.observe(document.querySelector(".resume-img"));
observer3.observe(document.querySelector(".resume h1"));
observer4.observe(document.querySelector(".contact-wrapper"));
observer5.observe(document.querySelector(".see-projects"));
observer6.observe(document.querySelector(".projects h1"));
