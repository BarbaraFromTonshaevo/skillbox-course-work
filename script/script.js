function changeText(){
    document.querySelectorAll('[data-mobiletext]').forEach(function(textNew){
        if(window.innerWidth > 767 && window.innerWidth < 1920){
            textNew.textContent = textNew.dataset.notetext;
        }
        if(window.innerWidth <= 767 ){
            textNew.textContent = textNew.dataset.mobiletext;
        }
        if(window.innerWidth >= 1920){
            textNew.textContent = textNew.dataset.desctoptext;
        }
    })
}
window.addEventListener('DOMContentLoaded', function(){
    // Бургер
    document.querySelector('#burger').addEventListener('click',function(){
        document.querySelector('.header').classList.add('header_burger_is_open')
    })
    document.querySelector('#burger-close').addEventListener('click',function(){
        document.querySelector('.header').classList.remove('header_burger_is_open')
    })
    // Поиск
    document.querySelector('#search').addEventListener('click',function(){
        document.querySelector('.header-top__nav-search').classList.add('header-top__nav-search_is_open')
        if(document.body.clientWidth < 1920 ){
            document.querySelector('.header-top__burger').classList.add('is-hidden')
            document.querySelector('.header-top__link').classList.add('is-hidden')
        }
    })
    document.querySelector('.nav-search__close').addEventListener('click',function(){
        document.querySelector('.header-top__nav-search').classList.remove('header-top__nav-search_is_open')
        document.querySelector('.header-top__burger').classList.remove('is-hidden')
        document.querySelector('.header-top__link').classList.remove('is-hidden')
    })
    // Кнопка событий
    if(window.innerWidth < 1024){
        document.querySelector('.events-slider__slide-3').classList.remove('events-slider__slide_is_visible')
    }
    document.querySelector('#see-all-events').addEventListener('click',function(){

        if(!document.querySelector('.events__btn-hide')){
            document.querySelectorAll('.events-slider__slide').forEach(function(eventsSliderSlide){
                eventsSliderSlide.classList.add('events-slider__slide_is_visible')
            })
            tempBtn = document.querySelector('#see-all-events')
            tempBtn.textContent = "Скрыть"
            tempBtn.classList.add('events__btn-hide')
            tempBtn.classList.remove('events__btn-all-events')
            
        }
        else{
            document.querySelectorAll('.events-slider__slide').forEach(function(eventsSliderSlide){
                eventsSliderSlide.classList.remove('events-slider__slide_is_visible')
            })
            document.querySelector('.events-slider__slide-1').classList.add('events-slider__slide_is_visible')
            document.querySelector('.events-slider__slide-2').classList.add('events-slider__slide_is_visible')
            if(window.innerWidth >= 1024){
                document.querySelector('.events-slider__slide-3').classList.add('events-slider__slide_is_visible')
            }
            tempBtn = document.querySelector('#see-all-events')
            tempBtn.textContent = "Все события"
            tempBtn.classList.add('.events__btn-all-events')
            tempBtn.classList.remove('events__btn-hide')
        }
    })
    window.addEventListener('resize',function(){
        if(window.innerWidth >= 1024){
            document.querySelector('.events-slider__slide-3').classList.add('events-slider__slide_is_visible')
        }
        else{
            document.querySelector('.events-slider__slide-3').classList.remove('events-slider__slide_is_visible')
        }
    })
    document.addEventListener('click',function(event){
        var elem = document.querySelector('.painting-list__item_is_open')
        if(elem){
            var flag = 0
            if((event.target.classList != 'style-list__item')&&(event.target.classList != 'painting-list__wrap')&&(event.target.classList != 'painting-list__heading')){
                document.querySelectorAll('.painting-list__item').forEach(function(paintingListItem){
                    paintingListItem.classList.remove('painting-list__item_is_open')
                })
            }
        }
    })
    // Выплывающий список художников
    document.querySelectorAll('.painting-list__heading').forEach(function(paintingListHeading){
        paintingListHeading.addEventListener('click',function(){
            var element = document.querySelector('.painting-list__item_is_open')
            if(!element){
                paintingListHeading.parentElement.classList.add('painting-list__item_is_open')
            }
            else if(element == paintingListHeading.parentElement){
                paintingListHeading.parentElement.classList.remove('painting-list__item_is_open')
            }
            else{
                document.querySelectorAll('.painting-list__item').forEach(function(paintingListItem){
                    paintingListItem.classList.remove('painting-list__item_is_open')
                })
                paintingListHeading.parentElement.classList.add('painting-list__item_is_open')
            }
        })
    })   
    // Modal Window
    document.querySelectorAll('.gallery-slider__image').forEach(function(Pis){
        Pis.addEventListener('click',function(event){
                document.querySelector('.modal__painter-name').textContent = `${Pis.dataset.name}`
                document.querySelector('.modal__art-name').textContent = `${Pis.dataset.title}`
                document.querySelector('.modal__year').textContent = `${Pis.dataset.year}`
                document.querySelector('.modal__description').textContent = `${Pis.dataset.description}`
                document.querySelector('.modal__img').setAttribute("src",`${Pis.firstElementChild.getAttribute("src")}`)
                document.querySelector('body').classList.add('body_hidden')
                document.querySelector('.modal').classList.add('modal_is_active')    

        })
    })
    document.querySelector('.modal__btn-close').addEventListener('click',function(){
        document.querySelector('body').classList.remove('body_hidden')
        document.querySelector('.modal').classList.remove('modal_is_active')  
    })

    // Accordion
    document.querySelectorAll(".accordion__heading").forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(document.querySelector('.accordion__item_open') !== null && document.querySelector('.accordion__item_open') !== item.parentElement){
                document.querySelector('.accordion__item_open').classList.remove('accordion__item_open');
            }
            item.parentElement.classList.toggle('accordion__item_open');
        })
    })
    document.querySelectorAll('.accordion__artists-btn').forEach(function(PntrBtn){
        PntrBtn.addEventListener('click',function(){
            var name = PntrBtn.dataset.name;
            document.querySelectorAll('.catalog__info-card').forEach(function(TabContent){
                TabContent.classList.remove('catalog__info-card_is_active');
            });
            document.querySelector('.accordion__artists-btn_is_active').classList.remove('accordion__artists-item_is_active');
            document.querySelector(`[data-name="${name}"]`).classList.add('accordion__artists-item_is_active')
            document.querySelector(`[data-painter="${name}"]`).classList.add('catalog__info-card_is_active')
        })
    })
    // Editions
    changeText();
    window.addEventListener('resize', () => {
        changeText();
    });
    // Tooltip
    document.querySelectorAll('.tooltip').forEach(function(TltpBtn){
        TltpBtn.addEventListener('click',function(){
            TltpBtn.classList.toggle('is-open');
        })
    })
    // Check
    document.querySelectorAll('.input-check').forEach(function(ChBtn){
        ChBtn.addEventListener('click',function(){
            ChBtn.parentNode.classList.toggle("checked");
        })
    })
    // Страны
    document.querySelectorAll('.catalog__country-item').forEach(function(catalogCountryItem){
        catalogCountryItem.addEventListener('click', function(){
            document.querySelectorAll('.catalog__country-item').forEach(function(catalogCI){
                catalogCI.classList.remove('catalog__country-item_is_active')
            })
            catalogCountryItem.classList.add('catalog__country-item_is_active')
            document.querySelectorAll('.catalog__info-accordion').forEach(function(catinfo){
                catinfo.classList.remove('catalog__info-accordion_is_active')
            })
            var lang = 'info-' + catalogCountryItem.dataset.lang;
            document.getElementById(lang).classList.add('catalog__info-accordion_is_active');
            document.querySelector('.accordion__artists-btn_is_active').classList.remove('accordion__artists-item_is_active');
            document.getElementById(lang).querySelector('.accordion__artists-btn').classList.add('accordion__artists-item_is_active');
            var name = document.getElementById(lang).querySelector('.accordion__artists-btn_is_active').dataset.name;
            document.querySelectorAll('.catalog__info-card').forEach(function(catcard){
                catcard.classList.remove('catalog__info-card_is_active');
            })
            document.querySelector(`[data-painter="${name}"]`).classList.add('catalog__info-card_is_active');

        })
    })
    // Чекбоксы
    // document.querySelectorAll('.check__input').parentElement.style.color = "#9D5CD0";
    document.querySelectorAll('.check__input').forEach((checkInput)=>{
        checkInput.addEventListener('click',()=>{
            console.log('checked');
            checkInput.parentElement.classList.toggle('checked-text');
        })
    })
})
