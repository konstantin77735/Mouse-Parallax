import Parallax from "./main.js";

const firstParallax = new Parallax('.first-bg', {
        step: 15,
        zIndex: 1
    }),
    secondParallax = new Parallax('.second-bg', {
        step: 30,
        zIndex: 2
    }),
    thirdParallax = new Parallax('.third-bg', {
        step: 75,
        zIndex: 3
    }),
    fourthParallax = new Parallax('.fourth-bg', {
        step: 120,
        zIndex: 4
    });
