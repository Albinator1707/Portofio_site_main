window.addEventListener('DOMContentLoaded', AOS.init);
window.addEventListener('load', AOS.refresh);

const main = document.querySelector('.wrapper'),
      percent = document.querySelectorAll('.skills__percent'),
      listOfCircles = [...document.querySelectorAll('.circle')];
let timer = [],
    counter = 0;

const setPerc = (value, i) => {
    const arr = [...percent];
    counter++;
    arr[i].textContent = `${counter}%`;
    if (counter == value) clearInterval(timer[i]);
};


const scrollEvent = () => {

    const dash = listOfCircles.map((el) => {
        const style = getComputedStyle(el);
        return style.strokeDashoffset;
    });

    if (main.scrollTop > 1600) {
        listOfCircles.forEach((el, i) => {
            el.style.setProperty('--stroke-dashoffset', dash[i]);
            el.classList.add('active');
            if (!timer[i]) {timer[i] = setInterval(() => setPerc(document.querySelectorAll('.skills__percent')[i].getAttribute('data-value'), i), 100);};
        });
    } else {
        listOfCircles.forEach((el) => {
            el.classList.remove('active');
        });
    }
  };

main.addEventListener('scroll', scrollEvent);

$('.slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: '<div class="slider__arrow_left"><img src="icons/arrow_left.png" alt="arrow_left"></div>',
    nextArrow: ' <div class="slider__arrow_right"> <img src="icons/arrow_right.png" alt="arrow_right"></div>'
});





 
