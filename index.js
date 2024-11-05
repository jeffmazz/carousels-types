// Carousel 1

const carousel_1 = document.querySelector(".carousel_1")
const prevBtn = document.querySelector("#previous_image_button_1")
const nextBtn = document.querySelector('#next_image_button_1')

// Constants to get width values
let imgWidth_1 = document.querySelector('.img').offsetWidth
let gap_1 = ((imgWidth_1*2) / 96) * 8
let valueToScroll_1 = (imgWidth_1*2) + gap_1

// function on load to carousel start with the correct value
window.addEventListener('load', () => {
    carousel_1.scrollBy({top:0, left:valueToScroll_1, behavior:'instant'})
})

// function on resize to adjust the constants that take the width values
window.addEventListener('resize', () => {
    carousel_1.scrollBy({top:0, left:-1000, behavior:'instant'})
    imgWidth_1 = document.querySelector('.img').offsetWidth
    gap_1 = ((imgWidth_1*2) / 96) * 8
    valueToScroll_1 = (imgWidth_1*2) + gap_1
    carousel_1.scrollBy({top:0, left: valueToScroll_1, behavior:'instant'})
})

// functions to show next and previous images
const nextImage = () => {

    if(Math.ceil(carousel_1.clientWidth + carousel_1.scrollLeft) >= carousel_1.scrollWidth) {
        carousel_1.scrollBy({top: 0, left: -valueToScroll_1*3, behavior:'instant'})
    }

    if(Math.ceil(carousel_1.scrollLeft + carousel_1.clientWidth + valueToScroll_1*1.3) >= carousel_1.scrollWidth) {
        carousel_1.scrollBy({top:0, left:10000, behavior:'smooth'})
        return
    }

    carousel_1.scrollBy({top: 0, left:valueToScroll_1, behavior:"smooth"})
}
const prevImage = () => {

    if(carousel_1.scrollLeft === 0) {
        carousel_1.scrollBy({top:0, left:valueToScroll_1*3, behavior:'instant'})
    }

    if(carousel_1.scrollLeft - valueToScroll_1*1.99 <= 0) {
        carousel_1.scrollBy({top: 0, left:-10000, behavior:"smooth"})
        return
    }

    carousel_1.scrollBy({top: 0, left:-valueToScroll_1, behavior:"smooth"})
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
    
    disableButtons()
    prevImage()
    enableButtons()
})
nextBtn.addEventListener('click', () => {
    disableButtons()
    nextImage()
    enableButtons()
})

// Carousel 2

const carousel_2 = document.querySelector('.carousel_2')
const buttons2 = Array.from(document.querySelectorAll('.buttons_2')[0].children)

const valueToScroll_2 = document.querySelector('.img_2').offsetWidth + 10 // scrollWidth = element width | 10 = gap

// function to disable buttons and avoid multiple clicks
const disableButtons2 = () => {
    buttons2.forEach(button => {
        button.disabled = true
    })
}
// function to enable click buttons
const enableButtons2 = () => {
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
                button.style.color = "rgb(255, 255, 100)"
            } else {
                button.style.color = "#ccc"
            }
        })

        disableButtons2()

        carousel_2.scrollTo({
            top:0,
            left: valueToScroll_2 * index,
            behavior: 'smooth'
        })

        enableButtons2()

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