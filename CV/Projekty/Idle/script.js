const showMe = document.querySelector('.show'),
      hiddenEl = document.querySelector('ul');

showMe.addEventListener('click', () => {
    hiddenEl.style.display == 'none' ?
         hiddenEl.style.display = 'block' : hiddenEl.style.display = 'none';
})