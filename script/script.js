window.addEventListener('DOMContentLoaded', function(){
    // Бургер
    document.querySelector('#burger').addEventListener('click',function(){
        document.querySelector('#burger-menu').classList.add('is-open')
    })
    document.querySelector('#burger-close').addEventListener('click',function(){
        document.querySelector('#burger-menu').classList.remove('is-open')
    })
    // Поиск
    document.querySelector('#search').addEventListener('click',function(){
        document.querySelector('.nav-search-form').classList.add('is-open')
        if(document.body.clientWidth < 1920 ){
            document.querySelector('.burger').classList.add('is-hidden')
            document.querySelector('.logo-link').classList.add('is-hidden')
        }
    })
    document.querySelector('.close-search').addEventListener('click',function(){
        document.querySelector('.nav-search-form').classList.remove('is-open')
        document.querySelector('.burger').classList.remove('is-hidden')
        document.querySelector('.logo-link').classList.remove('is-hidden')
    })
    // Кнопка событий
    document.querySelector('#see-all-events').addEventListener('click',function(){

        if(!document.querySelector('.hide-btn')){
            console.log('Не существует')
            document.querySelectorAll('.events-item').forEach(function(EventContent){
                EventContent.classList.add('visible-event')
            })
            tempBtn = document.querySelector('#see-all-events')
            tempBtn.textContent = "Скрыть"
            tempBtn.classList.add('hide-btn')
            tempBtn.classList.remove('btn-all-events')
            
        }
        else{
            console.log("Существует")
            if(document.body.clientWidth > 1023 ){
                document.querySelector('.event-5').classList.remove('visible-event')
                document.querySelector('.event-4').classList.remove('visible-event')
            }
            if(document.body.clientWidth < 1024 && document.body.clientWidth > 767){
                document.querySelector('.event-5').classList.remove('visible-event')
                document.querySelector('.event-4').classList.remove('visible-event')
                document.querySelector('.event-3').classList.remove('visible-event')

            }

            tempBtn = document.querySelector('#see-all-events')
            tempBtn.textContent = "Все события"
            tempBtn.classList.add('.btn-all-events')
            tempBtn.classList.remove('hide-btn')
              
        }

    })
    // Выплывающий список художников
    document.querySelectorAll('.painting-heading').forEach(function(TabsBtn){
        // console.log(TabsBtn)
        TabsBtn.addEventListener('click',function(event){
            var path = event.currentTarget.dataset.path
            var element = document.querySelector('.is-open')
            
            if(!element){          
                document.querySelector(`[data-target="${path}"]`).classList.add('is-open')
                TabsBtn.classList.add('is-active')
            } 
            else {
                if(path == element.dataset.target){
                    console.log("Clickclick")
                    document.querySelector(`[data-target="${path}"]`).classList.remove('is-open')
                    TabsBtn.classList.remove('is-active')
                }
                else{
                    document.querySelectorAll('.customScroll').forEach(function(TabContent){
                        TabContent.classList.remove('is-open')
                    })
                    document.querySelector(`[data-target="${path}"]`).classList.add('is-open')
                    TabsBtn.classList.add('is-active')
                }
            }
        })
    })
    // Gallary
    if((document.body.clientWidth < 1920)&&(document.body.clientWidth > 768)){
        document.querySelector('.num-slider-gl').textContent = 1 + "/14"
    }
    if(document.body.clientWidth < 768){
        document.querySelector('.btn-slider-gl').style.display = "none"
    }
    window.addEventListener('resize',function(){
        if(document.body.clientWidth > 1920 ){
            document.querySelector('.btn-slider-gl').style.display = "flex"
            document.querySelector('.mobile-gallary-slider').style.display = "none"
            if(curr_gl > 5){
                curr_gl = 5
            }
            var iter = 1
            document.querySelectorAll('.picture-item').forEach(function(Pis){
                var curr_start = (curr_gl-1)*6+1
                if(( iter >= curr_start)&&(iter <= curr_start+5)){
                    Pis.style.display = "block"
                }
                else{
                    Pis.style.display = "none"
                }
                iter++
            })
            document.querySelector('.num-slider-gl').textContent = curr_gl + "/5"
        }
        else if(document.body.clientWidth < 768){
            document.querySelector('.btn-slider-gl').style.display = "none"
            document.querySelector('.mobile-gallary-slider').style.display = "block"
        }
        else{
            document.querySelector('.btn-slider-gl').style.display = "flex"
            document.querySelector('.mobile-gallary-slider').style.display = "none"
            var iter = 1
            document.querySelectorAll('.picture-item').forEach(function(Pis){
                var curr_start = curr_gl*2-1
                if(( iter >= curr_start)&&(iter <= curr_start+3)){
                    Pis.style.display = "block"
                }
                else{
                    Pis.style.display = "none"
                }
                iter++
            })
            document.querySelector('.num-slider-gl').textContent = curr_gl + "/14"
        }
    })
    var curr_gl = 1
    document.querySelector('.right-slider-gl').addEventListener('click',function(){
        if((document.body.clientWidth > 1920) && (curr_gl < 5)){ //проверить не вышел ли за пределы
            console.log("CLICK")
            curr_gl++
            var iter = 1
            document.querySelectorAll('.picture-item').forEach(function(Pis){
                var curr_start = (curr_gl-1)*6+1
                if(( iter >= curr_start)&&(iter <= curr_start+5)){
                    Pis.style.display = "block"
                }
                else{
                    Pis.style.display = "none"
                }
                iter++
            })
            document.querySelector('.num-slider-gl').textContent = curr_gl + "/5"
        }
        if((document.body.clientWidth < 1920) && (curr_gl < 14)){ //проверить не вышел ли за пределы
            console.log("CLICK")
            curr_gl++
            var iter = 1
            document.querySelectorAll('.picture-item').forEach(function(Pis){
                var curr_start = curr_gl*2-1
                if(( iter >= curr_start)&&(iter <= curr_start+3)){
                    Pis.style.display = "block"
                }
                else{
                    Pis.style.display = "none"
                }
                iter++
            })
            document.querySelector('.num-slider-gl').textContent = curr_gl + "/14"
        }
    })
    document.querySelector('.left-slider-gl').addEventListener('click',function(){
        if((document.body.clientWidth > 1920) && (curr_gl > 1)){ //проверить не вышел ли за пределы
            console.log("CLICK")
            curr_gl--
            var iter = 1
            document.querySelectorAll('.picture-item').forEach(function(Pis){
                var curr_start = (curr_gl-1)*6+1
                if(( iter >= curr_start)&&(iter <= curr_start+5)){
                    Pis.style.display = "block"
                }
                else{
                    Pis.style.display = "none"
                }
                iter++
            })
            document.querySelector('.num-slider-gl').textContent = curr_gl + "/5"
        }
        if((document.body.clientWidth < 1920) && (curr_gl > 1)){ //проверить не вышел ли за пределы
            console.log("CLICK")
            curr_gl--
            var iter = 1
            document.querySelectorAll('.picture-item').forEach(function(Pis){
                var curr_start = curr_gl*2-1
                if(( iter >= curr_start)&&(iter <= curr_start+3)){
                    Pis.style.display = "block"
                }
                else{
                    Pis.style.display = "none"
                }
                iter++
            })
            document.querySelector('.num-slider-gl').textContent = curr_gl + "/14"
        }
    })
    // Modal Window
    document.querySelectorAll('.picture-item-slider').forEach(function(Pis){
        if(document.body.clientWidth < 768){
            Pis.addEventListener('dblclick',function(){
                document.querySelector('.modal-painter-name').textContent = `${Pis.dataset.name}`
                document.querySelector('.modal-art-name').textContent = `${Pis.dataset.title}`
                document.querySelector('.modal-year').textContent = `${Pis.dataset.year}`
                document.querySelector('.modal-description').textContent = `${Pis.dataset.description}`
                document.querySelector('.modal-img').setAttribute("src",`${Pis.firstChild.getAttribute("src")}`)
                document.querySelector('.modal-block').classList.add('is-active')   
                document.querySelector('.shadow').classList.add('is-active')       
            })
        }
    })

    document.querySelectorAll('.picture-item').forEach(function(Pis){
        Pis.addEventListener('click',function(event){
            if(document.body.clientWidth > 768){
                document.querySelector('.modal-painter-name').textContent = `${event.currentTarget.dataset.name}`
                document.querySelector('.modal-art-name').textContent = `${event.currentTarget.dataset.title}`
                document.querySelector('.modal-year').textContent = `${event.currentTarget.dataset.year}`
                document.querySelector('.modal-description').textContent = `${event.currentTarget.dataset.description}`
                document.querySelector('.modal-img').setAttribute("src",`${Pis.firstChild.getAttribute("src")}`)
                document.querySelector('.modal-block').classList.add('is-active')    
                document.querySelector('.shadow').classList.add('is-active')

            }         
        })
    })
    document.querySelector('.btn-close-modal').addEventListener('click',function(){
        document.querySelector('.shadow').classList.remove('is-active')
        document.querySelector('.modal-block').classList.remove('is-active')  
    })

    // Accordion
    document.querySelectorAll('.accordion-heading').forEach(function(AcrdBtn){
        // console.log(AcrdBtn)
        AcrdBtn.addEventListener('click',function(HeadBtn){
            // console.log("CLICK")
            var head = HeadBtn.currentTarget.dataset.head
            document.querySelector(`[data-info="${head}"]`).classList.toggle('is-open')
            document.querySelector(`[data-head="${head}"]`).classList.toggle('is-open')
        })
    })
    document.querySelectorAll('.artists-item').forEach(function(PntrBtn){
        PntrBtn.addEventListener('click',function(NameBtn){
            console.log("CLICK")
            var name = NameBtn.currentTarget.dataset.name
            document.querySelectorAll('.info-block').forEach(function(TabContent){
                TabContent.classList.remove('is-active')
            })
            document.querySelectorAll('.artists-item').forEach(function(TabContent){
                TabContent.classList.remove('is-active')
            })
            document.querySelector(`[data-name="${name}"]`).classList.add('is-active')
            document.querySelector(`[data-painter="${name}"]`).classList.add('is-active')
        })
    })

    // Partner

    var curr_part = 1
    document.querySelector('.partner-slider-right').addEventListener('click',function(){
        curr_part++
        if(curr_part < 8){
            var curr_part_img = 0
            console.log("RIGHT")
            document.querySelectorAll('.partner').forEach(function(TabPtnr){
                var ptnr_src = 'url('+'./img/Group-'+ (curr_part+curr_part_img)+'.png)'
                console.log(ptnr_src)
                TabPtnr.style.backgroundImage = ptnr_src
                curr_part_img++
            })
        }
        else if(curr_part == 8){
            document.querySelector('.partner-1').style.backgroundImage = 'url(./img/Group-8.png)'
            document.querySelector('.partner-2').style.backgroundImage = 'url(./img/Group-9.png)'
            document.querySelector('.partner-3').style.backgroundImage = 'url(./img/Group-1.png)'
        }
        else{
            document.querySelector('.partner-1').style.backgroundImage = 'url(./img/Group-9.png)'
            document.querySelector('.partner-2').style.backgroundImage = 'url(./img/Group-1.png)'
            document.querySelector('.partner-3').style.backgroundImage = 'url(./img/Group-2.png)'
            curr_part = 0
        }


    })
    document.querySelector('.partner-slider-left').addEventListener('click',function(){
        curr_part--
        if(curr_part > 0){
            var curr_part_img = 0
            console.log("LEFT")
            document.querySelectorAll('.partner').forEach(function(TabPtnr){
                var ptnr_src = 'url('+'./img/Group-'+ (curr_part+curr_part_img)+'.png)'
                console.log(ptnr_src)
                TabPtnr.style.backgroundImage = ptnr_src
                curr_part_img++
            })
        }
        else if(curr_part == -1){

            document.querySelector('.partner-1').style.backgroundImage = 'url(./img/Group-8.png)'
            document.querySelector('.partner-2').style.backgroundImage = 'url(./img/Group-9.png)'
            document.querySelector('.partner-3').style.backgroundImage = 'url(./img/Group-1.png)'
            curr_part = 8
        }
        else{
            document.querySelector('.partner-1').style.backgroundImage = 'url(./img/Group-9.png)'
            document.querySelector('.partner-2').style.backgroundImage = 'url(./img/Group-1.png)'
            document.querySelector('.partner-3').style.backgroundImage = 'url(./img/Group-2.png)'
        }
    })
    
    // Edition
    var curr_ed = 1
    document.querySelector('.right-slider-ed').addEventListener('click',function(){
        if((curr_ed < 5)&&(document.body.clientWidth > 1920)){
            curr_ed++
            var curr_ed_item = 1
            document.querySelectorAll('.editions-item').forEach(function(EdItem){
                if((curr_ed == curr_ed_item)||(curr_ed+1 == curr_ed_item)||(curr_ed+2 == curr_ed_item)){
                    EdItem.style.display = "block"
                    curr_ed_item++
                }
                else{
                    EdItem.style.display = "none"
                    curr_ed_item++
                }
            })
            var txtcnt = curr_ed + "/5"
            document.querySelector('.num-slider-ed').textContent = txtcnt
        }
        if((curr_ed < 6)&&(document.body.clientWidth < 1920)){
            curr_ed++
            var curr_ed_item = 1
            document.querySelectorAll('.editions-item').forEach(function(EdItem){
                if((curr_ed == curr_ed_item)||(curr_ed+1 == curr_ed_item)){
                    EdItem.style.display = "block"
                    curr_ed_item++
                }
                else{
                    EdItem.style.display = "none"
                    curr_ed_item++
                }
            })
            var txtcnt = curr_ed + "/6"
            document.querySelector('.num-slider-ed').textContent = txtcnt
        }
    })
    document.querySelector('.left-slider-ed').addEventListener('click',function(){
        if((curr_ed > 1)&&(document.body.clientWidth > 1920)){
            curr_ed--
            var curr_ed_item = 1
            document.querySelectorAll('.editions-item').forEach(function(EdItem){
                if((curr_ed == curr_ed_item)||(curr_ed+1 == curr_ed_item)||(curr_ed+2 == curr_ed_item)){
                    EdItem.style.display = "block"
                    curr_ed_item++
                }
                else{
                    EdItem.style.display = "none"
                    curr_ed_item++
                }
            })
            var txtcnt = curr_ed + "/5"
            document.querySelector('.num-slider-ed').textContent = txtcnt
        }
        if((curr_ed > 1)&&(document.body.clientWidth < 1920)){
            curr_ed--
            var curr_ed_item = 1
            document.querySelectorAll('.editions-item').forEach(function(EdItem){
                if((curr_ed == curr_ed_item)||(curr_ed+1 == curr_ed_item)){
                    EdItem.style.display = "block"
                    curr_ed_item++
                }
                else{
                    EdItem.style.display = "none"
                    curr_ed_item++
                }
            })
            var txtcnt = curr_ed + "/6"
            document.querySelector('.num-slider-ed').textContent = txtcnt
        }
    })
    // Здесь исправляется кол-во блоков при изменении ширины окна
    window.addEventListener('resize',function(){
        if(document.body.clientWidth > 1920 ){
            if(curr_ed == 6){
                curr_ed = 5
            }
            var src_1 = '.editions-item-'+(curr_ed)
            var src_2 = '.editions-item-'+(curr_ed+1)
            var src_3 = '.editions-item-'+(curr_ed+2)
            document.querySelector(src_1).style.display = "block"
            document.querySelector(src_2).style.display = "block"
            document.querySelector(src_3).style.display = "block"
            var txtcnt = curr_ed + "/5"
            document.querySelector('.num-slider-ed').textContent = txtcnt

        }
        else if(document.body.clientWidth < 768){
            document.querySelectorAll('.editions-item').forEach(function(EdItem){
                EdItem.style.display = "block"
            })
        }
        else{
            var curr_ed_item = 1
            document.querySelectorAll('.editions-item').forEach(function(EdItem){
                if((curr_ed == curr_ed_item)||(curr_ed+1 == curr_ed_item)){
                    EdItem.style.display = "block"
                    curr_ed_item++
                }
                else{
                    EdItem.style.display = "none"
                    curr_ed_item++
                }
            })
            var txtcnt = curr_ed + "/6"
            document.querySelector('.num-slider-ed').textContent = txtcnt
        }
    })
    // Tooltip
    document.querySelectorAll('.tooltip').forEach(function(TltpBtn){
        TltpBtn.addEventListener('click',function(){
            TltpBtn.classList.toggle('is-open')
        })
    })
})
