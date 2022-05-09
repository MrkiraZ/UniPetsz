onScroll();
addEventListener('scroll', onScroll);

function onScroll() {
    showNavOnScroll();
    showBackToTopButton();
   //activate menu
    currentSection(home);
    currentSection(services);
    currentSection(about);
    currentSection(contact);
}

function currentSection(section){//ativa menu ao estar na section
    const targetLine = scrollY + innerHeight/2;
    //verifica se a section passou da linha
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline= targetLine>=sectionTop;
    //verifica se a base esta a baixo da linha alvo
    const sectionEndAt = sectionTop+sectionHeight;
    const sectionEndPassedTargetline = sectionEndAt<=targetLine;
    //limites da section
    const sectionBoundArea= sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;
    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    menuElement.classList.remove('active');
    if(sectionBoundArea){
        menuElement.classList.add('active');
    }
}
function showNavOnScroll() {
    if(scrollY>0){
        navigation.classList.add('scroll');
    }
    else{
        navigation.classList.remove('scroll');
    }
}
function showBackToTopButton() {
    if(scrollY>300){
        backToTopButton.classList.add('show');
    }
    else{
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');

}
function closeMenu() {
    document.body.classList.remove('menu-expanded');

}

ScrollReveal({
    origin: 'top',
    distance:'0px',
    duration:700
}).reveal(`
#home,
#home .img,
#home .stats,
#services,
#services header,
#services .card,
#about,
about header,
about .content`);
