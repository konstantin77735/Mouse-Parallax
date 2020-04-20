export default class Parallax {
    constructor(imageSelector, settings) {
        this.bg = document.querySelector(imageSelector);
        this.step = settings.step || 50; // насколько сильно будет двигаться картинка
        this.zIndex = settings.zIndex;
        this.init();
    }
    init() {
        let x, y; //остаток от деления позиции курсора (X/Y)/ тапа (X/Y) на ширину, высоту
        window.addEventListener('mousemove', (e) => {
            x = e.clientX / window.innerWidth, //делим позицию курсора по X на Ширину
                y = e.clientY / window.innerHeight; //делим позицию курсора по Y на Высоту

            this.bg.style.transform = `translate(-${x * this.step}px, -${y * this.step}px)`;


        });


        window.addEventListener('touchmove', (e) => {
            if(e.touches[0].clientX >= window.innerWidth || e.touches[0].clientY >= window.innerHeight){
                //Если довели пальцем до вертикальной или горизонтальной грани
                return;
            }
            x = e.touches[0].clientX / window.innerWidth, //делим позицию курсора по X на Ширину
                y = e.touches[0].clientY / window.innerHeight; //делим позицию курсора по Y на Высоту
                const mStep = this.step/2;

            this.bg.style.transform = `translate(-${x * mStep}px, -${y * mStep}px)`;
            console.log(`${e.touches[0].clientX}`);
            
        });

    }
}
