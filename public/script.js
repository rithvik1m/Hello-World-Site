const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
