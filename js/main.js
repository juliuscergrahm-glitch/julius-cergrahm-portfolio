
const navToggle=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(navToggle&&navLinks){navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.href===location.href)a.classList.add('active');});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

