const cursor = document.getElementById('cursor');

const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement);

const hoverElement = document.getElementById('hoverElement');

hoverElement.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
});

hoverElement.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
});
