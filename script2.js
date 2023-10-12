let rbtn = document.querySelector('.r-arr');
const lbtn = document.querySelector('.l-arr');
// geting cards 
const Cards = document.querySelector('.pacs').clientWidth;

if(Cards) {
    let cardsWidth = Cards.clientWidth ;

    rbtn.addEventListener('click' , ()=>{
        console.log('click');
        const scrollAmount = cardsWidth
        packegs.scrollBy({left:scrollAmount, behavior:"smooth"});
    })
    lbtn.addEventListener('click' , ()=>{
        console.log('click');
        const scrollAmount = cardsWidth * -1
        packegs.scrollBy({left:scrollAmount, behavior:"smooth"});
    })
    
}