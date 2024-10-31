// Carousel 1

const carousel = document.querySelector(".carousel_1")
const prevBtn = document.querySelector("#previous_image_button_1")
const nextBtn = document.querySelector('#next_image_button_1')

// function on load to carousel start with the correct value
window.addEventListener('load', () => {
    carousel.scrollBy({top:0, left:(imageWidth*2), behavior:'instant'})
})

// image width + gap
const imageWidth = document.querySelector('.img').offsetWidth + 10

// functions to show next and previous images
const nextImage = () => {
    carousel.scrollBy({top: 0, left:imageWidth, behavior:"smooth"})
}
const prevImage = () => {
    carousel.scrollBy({top: 0, left:-imageWidth, behavior:"smooth"})
}

// function to disable buttons and avoid multiple clicks
const disableButtons = () => {
    prevBtn.disabled = true
    nextBtn.disabled = true
}
// function to enable click buttons
const enableButtons = () => {
    setTimeout(() => {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }, 400)
}

// buttons on click
prevBtn.addEventListener("click", () => {

    if(carousel.scrollLeft == 0) carousel.scrollBy({top: 0, left: (imageWidth*6), behavior: 'instant'})
    
    disableButtons()
    prevImage()
    enableButtons()
})
nextBtn.addEventListener('click', () => {

    if(carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) carousel.scrollBy({top: 0, left: -1770, behavior: 'instant'})

    disableButtons()
    nextImage()
    enableButtons()
})

// Carousel 2

const carousel_2 = document.querySelector('.carousel_2')
const buttons2 = Array.from(document.querySelectorAll('.buttons_2')[0].children)

const imageWidth2 = document.querySelector('.img_2').scrollWidth + 10 // scrollWidth = element width | 10 = gap

// function to disable buttons and avoid multiple clicks
const disableButtons2 = () => {
    buttons2.forEach(button => {
        button.disabled = true
    })
}
// function to enable click buttons
const ableButtons2 = () => {
    setInterval(() => {
        buttons2.forEach(button => {
            button.disabled = false
        })
    }, 400)
}

// Loop to make the carousel work
for(let index = 0; index <= 3; index ++) {

    buttons2[index].addEventListener('click', () => {

        buttons2.map(button => {
            if(button === buttons2[index]) {
                button.style.color = "rgb(36, 35, 99)"
            } else {
                button.style.color = "#ccc"
            }
        })

        disableButtons2()

        carousel_2.scrollTo({
            top:0,
            left: imageWidth2 * index,
            behavior: 'smooth'
        })

        ableButtons2()

    })

}

// Carousel 3

const carousel_3 = document.querySelector(".carousel_3")

let isDragging = false
let startX

const valueToScroll_3 = document.querySelector('.img_3').offsetWidth + 10

window.addEventListener('load', () => {
    carousel_3.scrollBy({top: 0, left: valueToScroll_3, behavior:'instant'})
})

carousel_3.addEventListener('mousedown', (e) => {
    isDragging = true
    startX = e.pageX
})

const showPreviewImage = () => {

    if(carousel_3.scrollLeft === 0) {
        carousel_3.scrollBy({top:0, left:valueToScroll_3*4, behavior:'instant'})
    }

    carousel_3.scrollBy({top:0, left:-valueToScroll_3, behavior:'smooth'})
    disableAndEnableCarouselEvent()
}
const showNextImage = () => {

    if(carousel_3.scrollLeft + carousel_3.clientWidth >= carousel_3.scrollWidth) {
        carousel_3.scrollBy({top: 0, left:-valueToScroll_3*4, behavior:'instant'})
    }

    carousel_3.scrollBy({top:0, left:valueToScroll_3, behavior:'smooth'})
    disableAndEnableCarouselEvent()
}

const disableAndEnableCarouselEvent = () => {
    carousel_3.style.pointerEvents = 'none'
    setTimeout(() => {
        carousel_3.style.pointerEvents = 'auto'
    }, 500)
}

carousel_3.addEventListener('mouseup', (e) => {
    if(!isDragging) return
    isDragging = false

    const endX = e.pageX

    if(startX < endX) {
        showPreviewImage()
    }
    if(startX > endX) {
        showNextImage()
    }

})