let side=document.querySelector('ul');
let Pminu=document.querySelector('.minu');
let minu=document.querySelectorAll('.minu .fa');
let body= document.querySelector('body')
minu.forEach(m => {
    m.addEventListener('click',(e)=>{
        e.preventDefault();
        e.target.parentElement.classList.toggle('close-minu');
        side.classList.toggle('asideminu');
        
    });    
});
    let linkes=document.querySelectorAll(".aside a");
    linkes.forEach((m)=>{
        m.addEventListener('click',(e)=>{
            Pminu.classList.toggle('close-minu');
            side.classList.toggle('asideminu');
        }); 
    });
let dark=document.querySelector('.darkminu');
dark.addEventListener('click',function(e){
    body.classList.toggle('dark');
});
let bq =document.querySelector(".home-header");

let imgs=["./images/home1.jpg","./images/home2.jpg","./images/home3.jpg","./images/home4.jpg"]
setInterval(function(){
    n=Math.floor(Math.random()*3);
    bq.style.backgroundImage = "url('"+imgs[n]+"')";
},5000);


let phone="738414111";
let phoneIcon=document.querySelector(".icon-phone .fa-phone");
let parphone=document.querySelector(".icon-phone p");
let emil="abdallahalju7@gmil.com";
let emailIcon=document.querySelector(".icon-email .fa-at");
let paremail=document.querySelector(".icon-email p");
hoverd(phoneIcon,phone,parphone);
hoverd(emailIcon,emil,paremail);
function hoverd(hoverd,content,element){
    hoverd.addEventListener('mouseenter',(e)=>{
        element.innerHTML = " ";
        for (let i = 0; i < content.length; i++) {
            element.innerHTML += content[i];
        }
    });
    hoverd.addEventListener('mouseleave',()=>{
        element.innerHTML = " ";
    });
}