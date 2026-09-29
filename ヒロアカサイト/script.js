const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.hero-dots button')];
let current = 0;
let timer;
function showSlide(index){
  current = index;
  slides.forEach((s,i)=>s.classList.toggle('active',i===index));
  dots.forEach((d,i)=>d.classList.toggle('active',i===index));
}
function startAuto(){
  clearInterval(timer);
  timer=setInterval(()=>showSlide((current+1)%slides.length),6000);
}
dots.forEach(dot=>dot.addEventListener('click',()=>{showSlide(Number(dot.dataset.slide));startAuto();}));
startAuto();
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.desktop-nav');
if(menu){
  menu.addEventListener('click',()=>{
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
