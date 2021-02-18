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
        console.log(TabsBtn)
        TabsBtn.addEventListener('click',function(event){
            var path = event.currentTarget.dataset.path
            var element = document.querySelector('.is-open')


            if(!element){          
                document.querySelector(`[data-target="${path}"]`).classList.add('is-open')
            } 
            else {
                if(path == element.dataset.target){
                    document.querySelector(`[data-target="${path}"]`).classList.remove('is-open')
                }
                else{
                    document.querySelectorAll('.customScroll').forEach(function(TabContent){
                        TabContent.classList.remove('is-open')
                    })
                    document.querySelector(`[data-target="${path}"]`).classList.add('is-open')
                }
            }
        })
    })

    const max_images_6 = 6
    const max_block_6 = 5

    const max_images_4 = 4
    const max_block_4 = 14 

    var curr_block_6 = 1
    var curr_block_4 = 1

    var curr_img_6 = 6
    var curr_img_4 = 4 

    var img_src = './img/Gallary-'


    document.querySelector('.right-slider-6').addEventListener('click', function(){
        if(curr_block_6 < max_block_6 ){
            document.querySelectorAll('.picture-item-6').forEach(function(ImgItem){
                curr_img_6++
                var full_src =  img_src + curr_img_6 + '.jpg'
                var full_url = 'url(' + full_src + ')'
                ImgItem.style.backgroundImage = full_url
            })
            curr_block_6++
            var text_content = curr_block_6 + '/5'
            // console.log(curr_block_6)
            document.querySelector('.num-slider-6').textContent = text_content
        }
    })
    document.querySelector('.left-slider-6').addEventListener('click', function(){
        if(curr_block_6 > 1){
            curr_img_6 = curr_img_6 - max_images_6*2
            // console.log(curr_img_6)
            document.querySelectorAll('.picture-item-6').forEach(function(ImgItem){
                curr_img_6++
                var full_src =  img_src + curr_img_6 + '.jpg'
                var full_url = 'url(' + full_src + ')'
                ImgItem.style.backgroundImage = full_url
            })
            curr_block_6--
            var text_content = curr_block_6 + '/5'
            // console.log(curr_block_6)
            document.querySelector('.num-slider-6').textContent = text_content
        }
    })
    document.querySelector('.right-slider-4').addEventListener('click', function(){
        if(curr_block_4 < max_block_4 ){
            curr_img_4 = curr_img_4 - 2
            document.querySelectorAll('.picture-item-4').forEach(function(ImgItem){
                curr_img_4++
                var full_src =  img_src + curr_img_4 + '.jpg'
                var full_url = 'url(' + full_src + ')'
                ImgItem.style.backgroundImage = full_url
            })
            curr_block_4++
            var text_content = curr_block_4 + '/14'
            // console.log(curr_block_4)
            document.querySelector('.num-slider-4').textContent = text_content
        }
    })
    document.querySelector('.left-slider-4').addEventListener('click', function(){
        if(curr_block_4 > 1 ){
            curr_img_4 = curr_img_4 - 6
            document.querySelectorAll('.picture-item-4').forEach(function(ImgItem){
                curr_img_4++
                var full_src =  img_src + curr_img_4 + '.jpg'
                var full_url = 'url(' + full_src + ')'
                ImgItem.style.backgroundImage = full_url
            })
            curr_block_4--
            var text_content = curr_block_4 + '/14'
            console.log(curr_block_4)
            document.querySelector('.num-slider-4').textContent = text_content
        }
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
