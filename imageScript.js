const image = document.getElementById('robert');

function animationOver() {
    image.style.margin = '1.8rem 3.5rem 1.2rem 0.8rem';
    image.style.boxShadow = '0 0 0 #f1faee';
    image.style.transition = '0.5s';
}

function animationOut() {
    image.style.margin = '1rem 3.5rem 2rem 0rem';
    image.style.boxShadow = '0.8rem 0.8rem #e63946';
    image.style.transition = '0.5s';
}

image.onmouseover = animationOver;
image.onmouseleave = animationOut;
