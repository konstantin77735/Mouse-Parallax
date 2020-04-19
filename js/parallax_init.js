import Parallax from "./main.js";

const firstParallax = new Parallax('.first-bg', {
    step: 30,
    zIndex: 1
}),
 secondParallax = new Parallax('.second-bg', {
    step: 50,
    zIndex: 2
}),
 thirdParallax = new Parallax('.third-bg', {
    step: 70,
    zIndex: 3
});
