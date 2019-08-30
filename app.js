const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav')


menuBtn.addEventListener("click", function(){
    if(nav.style.display === "none"){
    nav.style = "display: block";
    } else {
    nav.style = "display: none";
    } 
    console.log('click');
});

