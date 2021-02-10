window.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#burger').addEventListener('click',function(){
        document.querySelector('#burger-menu').classList.add('is-open')
    })
    document.querySelector('#burger-close').addEventListener('click',function(){
        document.querySelector('#burger-menu').classList.remove('is-open')
    })
    
    document.querySelector('.btn-all-events').addEventListener('click',function(){
        document.querySelectorAll('.events-item').forEach(function(EventContent){
            EventContent.classList.add('visible-event')
        })
        tempBtn = document.querySelector('#see-all-events')
        tempBtn.textContent = "Скрыть"
        tempBtn.classList.add('hide-btn')
        tempBtn.classList.remove('.btn-all-events')

    })
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

})
