/* ---SHOW MENU--- */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 
//hide menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* ---REMOVE MENU MOBILE--- */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* ---EMAIL JS--- */
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault()
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'Please write all the input fields!'
    }else {
        emailjs.sendForm('service_ctuxvjn','template_mdkpyr8','#contact-form','Dm6U7UPx2AFbbd08A')
        .then(() => {
    contactMessage.classList.add('blue-color');
    contactMessage.textContent = 'Message sent';

    setTimeout(() =>{ 
        clearForm()}, 2000)
});
    }
}

 function clearForm(){
        contactName.value = '',
        contactEmail.value = '',
        contactProject.value = '',
        contactMessage.textContent =''
};
contactForm.addEventListener('submit', sendEmail);


/* ---FOOTER--- */

//setting date for footer
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();


/* ---SCROLL SECTIONS ACTIVE LINK--- */
const sections = document.querySelectorAll('section[id]');
const scrollActive = () =>{
    const scrollY = window.pageYOffset; 
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


/* ---SHOW SCROLL UP--- */ 
const navbar = document.getElementById('nav-menu');
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 600){
        topLink.classList.add('show__scroll-up');
    }else{
        topLink.classList.remove('show__scroll-up');
    }
})


/* ---DARK LIGHT THEME--- */ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme ='ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme); 
}

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon)
    })


/* ---CHANGE BACKGROUND HEADER--- */
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >=60 ? 
    header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/* ---SCROLL REVEAL ANIMATION--- */
const scroll = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 500,
    //reset: true
})

scroll.reveal('.home__data, .projects__container, .footer__container');
scroll.reveal('.home__info div, .skills__content', {delay:500, origin: 'bottom', interval:100});
scroll.reveal('.contact__content:nth-child(1)', {origin:'left'});
scroll.reveal('.contact__content:nth-child(2)', {origin:'right'});
scroll.reveal('.qualification__content', {interval:100})


/* ---Preloader--- */
/*const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
})

*/








