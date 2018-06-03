document.querySelector('.btn-menu').addEventListener('click',function(e){
  document.querySelector('body').classList.toggle('show');
});

var navHeight = document.querySelector('#nav-menu').offsetHeight;
var navTop = document.querySelector('#nav-menu').offsetTop;

document.addEventListener('scroll',function(e){
    if(window.pageYOffset > navHeight+navTop){
      document.querySelector('.btn-menu').classList.add('active');
    }else {
      document.querySelector('.btn-menu').classList.remove('active');  
    }
});