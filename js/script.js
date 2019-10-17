//declaratie
var filteren = document.querySelector('form.filter');
var filterbutton = document.querySelector('button#toggle');

//functie waardoor de actie wordt gestart
filterbutton.addEventListener("click",function(){
  filteren.classList.toggle('show-filter');
});
