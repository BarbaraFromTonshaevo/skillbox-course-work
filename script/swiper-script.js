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
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,

        },
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1920: {
            // Количество слайдов для показа
            slidesPerView: 3,
            // Отступ между слайдами
            spaceBetween: 50,
            // Количество пролистываемых слайдов
            slidesPerGroup: 3,
            // Мультирядность
            slidesPerColumn: 2,
        }


    }
});
new Swiper('.editions-slider',{
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
        320: {},
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1920: {
            // Количество слайдов для показа
            slidesPerView: 3,
            // Отступ между слайдами
            spaceBetween: 50,
        },
    },
    
});
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
        1920: {
            // Количество слайдов для показа
            slidesPerView: 3,
            // Отступ между слайдами
            spaceBetween: 50,
        },
    },
});