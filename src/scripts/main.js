document.addEventListener('DOMContentLoaded', function() {
    const buttonRight = document.querySelector('.videos__scroll-right')
    const buttonLeft = document.querySelector('.videos__scroll-left')
    const videoItem = document.getElementById('video-frame')

    buttonRight.addEventListener("click", function(){
        document.querySelector('.videos__list').scrollLeft += videoItem.offsetWidth + 12
    })

    buttonLeft.addEventListener("click", function(){
        document.querySelector('.videos__list').scrollLeft -= videoItem.offsetWidth + 12
    })
})