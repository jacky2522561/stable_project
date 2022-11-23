const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const bur = document.querySelector('.bur');
const headline = document.querySelector('.headline');
const link = document.querySelectorAll('.link');
const navbar = document.querySelector('nav');

const t1 = new TimelineMax();

t1.fromTo(hero,1,{height: "0%"},{height: "80%",ease: Power2.easeInOut})
.fromTo(hero,1.2,{width: "100%"},{width: "70%",ease: Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease: Power2.easeInOut})
.fromTo(navbar,0.5,{opacity: 0, x:30},{opacity: 1, x:0},"-=0.5")
.fromTo(logo,0.5,{opacity: 0, x:30},{opacity: 1, x:0},"-=0.5")
.fromTo(link,0.5,{opacity: 0, x:30},{opacity: 1, x:0},"-=0.5")
.fromTo(headline,0.5,{opacity: 0, x:30},{opacity: 1, x:0},"-=0.5");


function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks =document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',function(){
        nav.classList.toggle('nav-active');
        navlinks.forEach(function(link,index){
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navlinkfade 0.5s ease forwards ${index/5 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();