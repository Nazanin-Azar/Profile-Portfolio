document.getElementById('about').addEventListener('click', function() {
    document.querySelector('.about__container').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('experience').addEventListener('click', function() {
    document.querySelector('.experience__container').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skill').addEventListener('click', function() {
    document.querySelector('.skill__container').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('portfolio').addEventListener('click', function() {
    document.querySelector('.portfolio__container').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function() {
    document.querySelector('.contact__container').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('resume__button').addEventListener('click', function() {
    window.open('resume.html', '_self');
})

document.getElementById('scroll-icon').addEventListener('click', function() {
    document.querySelector('.about__container').scrollIntoView({ behavior: 'smooth' });
});