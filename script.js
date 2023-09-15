document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', event => {
        console.log('clicked');
        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');
    })
})