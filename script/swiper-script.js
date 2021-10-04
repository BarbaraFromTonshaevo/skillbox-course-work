// Инициализация Swiper
new Swiper('.gallery-slider',{
    navigation:{
        nextEl: '.gallery-slider__button-next',
        prevEl: '.gallery-slider__button-prev'
    },
    pagination:{
        el:'.gallery-slider__pagination',
        type: 'fraction',
    },

    // Выключение/отключение
    // перетаскивания на ПК
    simulateTouch: true,

    // Чувствительность свайпа
    touchRatio: 1,

    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,

    // Курсор перетаскивания
    // grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,

    // Управление клавиатурой
    keyboard:{
        // Выключить/Включить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
    },

    // Автовысота
    autoHeight: false,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Активный слайд по центру
    centeredSlides: false,

    // Стартовый слайд
    initialSlide: 0,

    breakpoints: {
        // больше чем указанное значение
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            grid: {
                rows:2,
            }
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            grid: {
                rows:2,
            }

        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            grid: {
                rows:2,
            }
        },
        1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
            grid: {
                rows:2,
            }
        },
        1500: {
            // Количество слайдов для показа
            slidesPerView: 3,
            // Отступ между слайдами
            spaceBetween: 50,
            // Количество пролистываемых слайдов
            slidesPerGroup: 3,
            // Мультирядность
            grid: {
                rows:2,
            }
        }
    }
});
// Events
const slider = document.querySelector('.events-slider');
let mySwiper;
function mobileSlider(){
    if(window.innerWidth <= 768 && slider.dataset.mobile == 'false'){
        console.log('resize')
        mySwiper = new Swiper(slider,{
            slideClass: 'events-slider__slide',
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination:{
                el: '.events-slider__wrap-pagination'
            },
        });

        slider.dataset.mobile = 'true';
    }
    if(window.innerWidth >= 768){
        slider.dataset.mobile = 'false';
        if(slider.classList.contains('swiper-container-initialized')){
            mySwiper.destroy();
        }
    }
}
mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();

})
// Editions
const sliderEd = document.querySelector('.editions-slider');

let editionsSwiper;

function editionsSlider() {
	if (window.innerWidth <= 767) {
		if (sliderEd.classList.contains('swiper-container-initialized')) {
			editionsSwiper.destroy();
		}
		sliderEd.dataset.mobile = 'false';
	}

	if (window.innerWidth > 767 && slider.dataset.mobile == 'false') {
		sliderEd.dataset.mobile = 'true';
		editionsSwiper = new Swiper('.editions-slider',{
            navigation:{
                nextEl: '.editions-slider__button-next',
                prevEl: '.editions-slider__button-prev'
            },
            pagination:{
                el:'.editions-slider__pagination',
                type: 'fraction',
            },
            // Управление клавиатурой
            keyboard:{
                // Выключить/Включить
                enabled: true,
                // Включить\выключить
                // только когда слайдер
                // в пределах вьюпорта
                onlyInViewport: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1500: {
                    // Количество слайдов для показа
                    slidesPerView: 3,
                    // Отступ между слайдами
                    spaceBetween: 50,
                },
            },
        });
	}
}

editionsSlider();

window.addEventListener('resize', () => {
	editionsSlider();
});

// Partner
new Swiper('.partner-slider',{
    navigation:{
        nextEl: '.partner-slider__button-next',
        prevEl: '.partner-slider__button-prev'
    },
    // Количество слайдов для показа
    slidesPerView: 3,
    // Отступ между слайдами
    spaceBetween: 50,
    // Бесконечное пролистывание
    loop: true,
        // Управление клавиатурой
    keyboard:{
        // Выключить/Включить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1630: {
            // Количество слайдов для показа
            slidesPerView: 3,
            // Отступ между слайдами
            spaceBetween: 50,
        },
    },
});