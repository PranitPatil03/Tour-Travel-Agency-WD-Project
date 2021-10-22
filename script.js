let searchbtr=document.querySelector('#search-btr');
let searchbox=document.querySelector('.search-bar-box');

let formbtr=document.querySelector('#login-btr');
let loginform=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

let videoBtr=document.querySelectorAll('.vid-btr');

window.onscroll=()=>{
    searchbtr.classList.remove('fa-times');
    searchbox.classList.remove('active');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    loginform.classList.remove('active');    
}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

searchbtr.addEventListener('click',()=>{
    searchbtr.classList.toggle('fa-times');
    searchbox.classList.toggle('active');
})

formbtr.addEventListener('click',()=>{
    loginform.classList.add('active');
})

formClose.addEventListener('click',()=>{
    loginform.classList.remove('active');
})

videoBtr.forEach(btr=>{
    btr.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btr.classList.add('active');
        let src=btr.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    })
})