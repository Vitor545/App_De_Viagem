function scrollHeader() {
    const header = document.querySelector('.header');
    if(this.scrollY >= 50) header.classList.add('scroll-header')
    if(this.scrollY < 50) header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);


