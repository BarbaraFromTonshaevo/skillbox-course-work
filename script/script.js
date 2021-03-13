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
    document.querySelector('#see-all-events').addEventListener('click',function(){

        if(!document.querySelector('.events__btn-hide')){
            document.querySelectorAll('.events__item').forEach(function(EventContent){
                EventContent.classList.add('events__item_is_visible')
            })
            tempBtn = document.querySelector('#see-all-events')
            tempBtn.textContent = "Скрыть"
            tempBtn.classList.add('events__btn-hide')
            tempBtn.classList.remove('events__btn-all-events')
            
        }
        else{
            if(document.body.clientWidth > 1023 ){
                document.querySelector('.event-5').classList.remove('events__item_is_visible')
                document.querySelector('.event-4').classList.remove('events__item_is_visible')
            }
            if(document.body.clientWidth < 1024 && document.body.clientWidth > 767){
                document.querySelector('.event-5').classList.remove('events__item_is_visible')
                document.querySelector('.event-4').classList.remove('events__item_is_visible')
                document.querySelector('.event-3').classList.remove('events__item_is_visible')

            }

            tempBtn = document.querySelector('#see-all-events')
            tempBtn.textContent = "Все события"
            tempBtn.classList.add('.events__btn-all-events')
            tempBtn.classList.remove('events__btn-hide')
              
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

    // Modal Window
    document.querySelectorAll('.gallery-slider__image').forEach(function(Pis){
        Pis.addEventListener('click',function(event){
                document.querySelector('.modal__painter-name').textContent = `${Pis.dataset.name}`
                document.querySelector('.modal__art-name').textContent = `${Pis.dataset.title}`
                document.querySelector('.modal__year').textContent = `${Pis.dataset.year}`
                document.querySelector('.modal__description').textContent = `${Pis.dataset.description}`
                document.querySelector('.modal__img').setAttribute("src",`${Pis.firstElementChild.getAttribute("src")}`)

                document.querySelector('.modal-block').classList.add('gallery__modal-block_is_active')    
                document.querySelector('.gallery__shadow').classList.add('gallery__shadow_is_active')
        })
    })
    document.querySelector('.modal__btn-close').addEventListener('click',function(){
        document.querySelector('.gallery__shadow').classList.remove('gallery__shadow_is_active')
        document.querySelector('.modal-block').classList.remove('gallery__modal-block_is_active')  
    })

    // Accordion
    document.querySelectorAll('.accordion__heading').forEach(function(AcrdBtn){
        AcrdBtn.addEventListener('click',function(HeadBtn){
            var head = HeadBtn.currentTarget.dataset.head
            document.querySelector(`[data-info="${head}"]`).classList.toggle('accordion__artists-info_is_open')
            document.querySelector(`[data-head="${head}"]`).classList.toggle('accordion__heading_is_open')
        })
    })
    document.querySelectorAll('.accordion__artists-item').forEach(function(PntrBtn){
        PntrBtn.addEventListener('click',function(NameBtn){
            var name = NameBtn.currentTarget.dataset.name
            document.querySelectorAll('.catalog__info-card').forEach(function(TabContent){
                TabContent.classList.remove('catalog__info-card_is_active')
            })
            document.querySelectorAll('.accordion__artists-item').forEach(function(TabContent){
                TabContent.classList.remove('accordion__artists-item_is_active')
            })
            document.querySelector(`[data-name="${name}"]`).classList.add('accordion__artists-item_is_active')
            document.querySelector(`[data-painter="${name}"]`).classList.add('catalog__info-card_is_active')
        })
    })
    // Edition
    // window.addEventListener('resize',function(){
    //     if(document.body.clientWidth < 768){
    //         document.querySelector('.editions-item-5').querySelector('.editions-title').textContent = "Модульные сетки..." 
    //         document.querySelector('.editions-item-5').querySelector('.editions-author').textContent = "Мюллер-Брокманн..."
    //         document.querySelector('.editions-item-6').querySelector('.editions-title').textContent = "Эволюция графич..." 
    //         document.querySelector('.editions-item-7').querySelector('.editions-title').textContent = "Искусство и визуа..."   
    //         document.querySelectorAll('.editions-item').forEach(function(EdItm){
    //             EdItm.querySelector('.editions-book').style.order = "1"
    //             EdItm.querySelector('.editions-title').style.order = "2"
    //             EdItm.querySelector('.editions-author').style.order = "3"
    //             EdItm.querySelector('.editions-price').style.order = "4"
    //             EdItm.querySelector('.btn-order').style.order = "5"
    //         })
    //     }
    // })
    // Здесь исправляется кол-во блоков при изменении ширины окна
    window.addEventListener('resize',function(){
        if(document.body.clientWidth > 1920 ){
            if(curr_ed == 6){
                curr_ed = 5
            }
            var src_1 = '.editions__item-'+(curr_ed)
            var src_2 = '.editions__item-'+(curr_ed+1)
            var src_3 = '.editions__item-'+(curr_ed+2)
            document.querySelector(src_1).style.display = "block"
            document.querySelector(src_2).style.display = "block"
            document.querySelector(src_3).style.display = "block"
            var txtcnt = curr_ed + "/ 5"
            document.querySelector('.editions__num-slider').textContent = txtcnt

        }
        else if(document.body.clientWidth < 768){
            document.querySelectorAll('.editions__item').forEach(function(EdItem){
                EdItem.style.display = "block"
            })
        }
        else{
            var curr_ed_item = 1
            document.querySelectorAll('.editions__item').forEach(function(EdItem){
                if((curr_ed == curr_ed_item)||(curr_ed+1 == curr_ed_item)){
                    EdItem.style.display = "block"
                    curr_ed_item++
                }
                else{
                    EdItem.style.display = "none"
                    curr_ed_item++
                }
            })
            var txtcnt = curr_ed + "/ 6"
            document.querySelector('.editions__num-slider').textContent = txtcnt
        }
    })
    // Tooltip
    document.querySelectorAll('.tooltip').forEach(function(TltpBtn){
        TltpBtn.addEventListener('click',function(){
            TltpBtn.classList.toggle('is-open')
        })
    })
    // Check
    document.querySelectorAll('.input-check').forEach(function(ChBtn){
        ChBtn.addEventListener('click',function(){
            ChBtn.parentNode.classList.toggle("checked")
        })
    })
    // Страны
    document.querySelectorAll('.catalog__country-item').forEach(function(catalogCountryItem){
        catalogCountryItem.addEventListener('click', function(){
            document.querySelectorAll('.catalog__country-item').forEach(function(catalogCI){
                catalogCI.classList.remove('catalog__country-item_is_active')
            })
            catalogCountryItem.classList.add('catalog__country-item_is_active')
        })
    })
})
