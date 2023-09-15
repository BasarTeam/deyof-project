const cardParnt = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')
const rightBtn = document.querySelector('.right-arrow')
const leftBtn = document.querySelector('.left-arrow')

let obj; 

leftBtn.addEventListener('click',()=> {
    console.log(cards[cards.length -1].offsetLeft)
    cardParnt.scrollBy({
        left:-(cards[cards.length -1].offsetLeft),
        behavior: "smooth",
    })
})

rightBtn.addEventListener('click',()=> {
    cardParnt.scrollBy({
        left:(cards[cards.length -1].offsetLeft),
        behavior: "smooth",
    })
})

