function scrollHeader() {
    const header = document.querySelector('.header');
    if(this.scrollY >= 50) header.classList.add('scroll-header')
    if(this.scrollY < 50) header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

function scrollActive(){
    const sections = document.querySelectorAll('section[id]')

    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
