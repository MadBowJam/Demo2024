const cursor = document.getElementById('cursor');

const positionElement = (e) => {
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursor.style.opacity = '1'; // Показуємо курсор при русі миші
}

const hideCursor = () => {
    cursor.style.opacity = '0'; // Ховаємо курсор при прокрутці
}

window.addEventListener('mousemove', positionElement);
window.addEventListener('scroll', hideCursor);

const hoverElements = document.querySelectorAll('.hoverElement');

hoverElements.forEach(hoverElement => {
    hoverElement.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });

    hoverElement.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});
