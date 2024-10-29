const carousel = document.querySelector(".carousel_1")
const prevBtn = document.querySelector("#previous_image_button_1")
const nextBtn = document.querySelector('#next_image_button_1')

// function on load to carousel start with the correct value
window.addEventListener('load', () => {
    carousel.scrollBy({top:0, left:590, behavior:'instant'})
})

// image width + gap
const imageWidth = document.querySelector('.img').scrollWidth + 10


// functions to show next and previous images
const nextImage = () => {
    carousel.scrollBy({top: 0, left:imageWidth, behavior:"smooth"})
}
const prevImage = () => {
    carousel.scrollBy({top: 0, left:-imageWidth, behavior:"smooth"})
}


// functions to avoid multiple clicks
const disableButtons = () => {
    prevBtn.style.pointerEvents = "none"
    nextBtn.style.pointerEvents = "none"
}
const ableButtons = () => {
    setTimeout(() => {
        prevBtn.style.pointerEvents = "auto"
        nextBtn.style.pointerEvents = "auto"
    }, 400)
}


// buttons on click
prevBtn.addEventListener("click", () => {

    if(carousel.scrollLeft == 0) carousel.scrollBy({top: 0, left: 1770, behavior: 'instant'})
    
    disableButtons()
    prevImage()
    ableButtons()
})
nextBtn.addEventListener('click', () => {

    if(carousel.scrollLeft == 2065) carousel.scrollBy({top: 0, left: -1770, behavior: 'instant'})

    disableButtons()
    nextImage()
    ableButtons()
})