const bg= document.getElementById('Renaissance');
window.addEventListener('scroll',function(){
bg.style.backgroundSize=160 - + window.pageYOffset/12 + '%';
})