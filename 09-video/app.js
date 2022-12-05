const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.onclick = function() {
    if(!btn.classList.contains("slide")) {
        btn.classList.add("slide")
        video.pause()
    } else {
        btn.classList.remove("slide")
        video.play()
    }
}

//preloader
const preloader = document.querySelector(".preloader")

window.onload = function() {
    preloader.classList.add('hide-preloader')
}