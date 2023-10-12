let rbtn = document.querySelector('.r-arr');
const lbtn = document.querySelector('.l-arr');
const backegs = document.querySelector('.pacs');
const backeg = document.querySelector('.pac');

rbtn.addEventListener('click' , ()=>{
    console.log('click');
    const scrollAmount = backeg.clientWidth 
    backegs.scrollBy({left:scrollAmount, behavior:"smooth"});
})
lbtn.addEventListener('click' , ()=>{
    console.log('click');
    const scrollAmount = backeg.clientWidth * -1
    backegs.scrollBy({left:scrollAmount, behavior:"smooth"});
})
