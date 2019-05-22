;(function(){
  function getParent(element, target){
      while(!element.classList.contains(target)){
        element = element.parentNode;
        if(element.nodeName == 'BODY'){
          return false
        }else{
          return element;
        }
      }
    }

  let menuToggle = document.querySelector('.header--nav--toggle');
  let nav = document.querySelector('.header--nav');
  let menu = document.querySelector('#header--menu');
  let search = document.querySelector('.header--search');

  menuToggle.addEventListener('click', function(event){
      let headerRow = getParent(this, 'row');
      if (nav.classList.contains('is-active')) {
          this.setAttribute('aria-expanded', 'false');
          headerRow.classList.remove('header--nav--toggle__is-active');
          nav.classList.remove('is-active');
          menu.classList.remove('is-active');
        } else {
          nav.classList.add('is-active'); 
          menu.classList.add('is-active');
          headerRow.classList.add('header--nav--toggle__is-active');
          this.setAttribute('aria-expanded', 'true');
        }
  })
})()