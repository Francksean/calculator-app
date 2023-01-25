

const mainscreen = document.querySelector('.mainscreen');


const firstRowButton  = document.querySelectorAll('.first-row-btn');
firstRowButton.addEventListener("click", function(){
  mainscreen.innerHTML = firstRowButton; 
  return mainscreen;
})

