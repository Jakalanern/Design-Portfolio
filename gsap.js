var tl = gsap.timeline({});
tl.to("#main", { y: 0, duration: 1 });
tl.to("#projects", { y: 0, duration: 1 }, "-=1");
tl.to("#main-intro", { opacity: 1, duration: 2 }, "-=1");
tl.to("#nav", { opacity: 1, duration: 2 }, "-=1.5");
tl.to("#nav", { y: 0, duration: 1 }, "-=2");
tl.to("#intro-subtext", { opacity: 1, duration: 1 }, "-=1.25");
tl.to("#intro-subtext", { y: 0, duration: 1 }, "-=1.25");
