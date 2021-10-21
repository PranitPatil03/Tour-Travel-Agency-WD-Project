let searchbtr=document.querySelector('#search-btr');
let searchbox=document.querySelector('.search-bar-box');

window.onscroll=()=>{
    searchbtr.classList.remove('fa-times');
    searchbox.classList.remove('active');
}

searchbtr.addEventListener('click',()=>{
    searchbtr.classList.toggle('fa-times');
    searchbox.classList.toggle('active');
})