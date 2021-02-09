window.addEventListener('DOMContentLoaded', function(){
    hideBtn = 0
    document.querySelector('.btn-all-events').addEventListener('click',function(){
        document.querySelectorAll('.events-item').forEach(function(EventContent){
            EventContent.classList.add('visible-event')
        })
        tempBtn = document.querySelector('#see-all-events')
        tempBtn.textContent = "Скрыть"
        tempBtn.classList.add('hide-btn')
        tempBtn.classList.remove('.btn-all-events')
        hideBtn = 1;
    })
})