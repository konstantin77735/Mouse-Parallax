export default class Parallax {
    constructor(imageSelector, settings) {
        this.bg = document.querySelector(imageSelector);
        this.step = settings.step || 50; // насколько сильно будет двигаться картинка
        this.zIndex = settings.zIndex;
        this.init();
    }
    init() {
        window.addEventListener("mousemove", (e) => {
            const x = e.clientX / window.innerWidth, //делим позицию курсора по X на Ширину
                y = e.clientY / window.innerHeight; //делим позицию курсора по Y на Высоту
            console.log(this);
            this.bg.style.transform = `translate(-${x * this.step}px, -${y * this.step}px)`;

            console.log(`x = ${x}, x*step = ${x*this.step}`);
        });
    }
}



