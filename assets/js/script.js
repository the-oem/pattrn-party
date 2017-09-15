// Might need this later
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', () => {
  if(document.querySelector('.mobile-nav').style.display === 'inline'){
    document.querySelector('.mobile-nav').style.display = 'none';
  } else {
    document.querySelector('.mobile-nav').style.display = 'inline';
  }
})
