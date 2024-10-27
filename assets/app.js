const cursor = document.getElementById('cursor');

const positionElement = (e) => {
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursor.style.opacity = '1';
}

const hideCursor = () => {
    cursor.style.opacity = '0';
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

document.addEventListener("DOMContentLoaded", () => {
    // Отримуємо елемент списку
    const searchItem = document.querySelector('.menu_additional_item.hoverElement');
    const menu = document.querySelector('.menu');
    const searchContainer = document.querySelector('.menu_additional_search');

    searchItem.addEventListener('click', (e) => {
        e.preventDefault();

        searchContainer.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

});


const menuLinks = document.querySelectorAll('.menu_main_link');
const catalog = document.querySelector('.catalog');
const menu = document.querySelector('.menu');
const catalogItem = menu.querySelector('.menu_main_item.hoverElement');
let closeTimeout;

menuLinks.forEach(link => {
    const originalText = link.textContent;

    link.addEventListener('mouseenter', () => {
        link.textContent = `(${originalText})`;
        link.classList.add('active');
        menu.classList.add('active');

        if (originalText === 'Каталог') {
            catalog.style.display = 'flex';
            catalogItem.classList.add('active');
        }
    });

    link.addEventListener('mouseleave', () => {
        if (originalText === 'Каталог') {
            closeTimeout = setTimeout(() => {
                link.textContent = originalText;
                link.classList.remove('active');
                if (!catalog.matches(':hover')) {
                    catalog.style.display = 'none';
                    catalogItem.classList.remove('active');
                }
            }, 500); // Затримка 0.5 секунди
        } else {
            link.textContent = originalText;
            link.classList.remove('active');
        }
    });
});

catalog.addEventListener('mouseenter', () => {
    catalog.style.display = 'flex';
    clearTimeout(closeTimeout);
    catalogItem.classList.add('active');
});

catalog.addEventListener('mouseleave', () => {
    menuLinks.forEach(link => {
        if (link.textContent.includes('Каталог')) {
            link.classList.remove('active');
        }
        link.textContent = link.textContent.replace(/\((.*?)\)/, '$1');
    });

    closeTimeout = setTimeout(() => {
        catalog.style.display = 'none';
        menu.classList.remove('active');
        catalogItem.classList.remove('active');
    }, 500);
});

menu.addEventListener('mouseleave', () => {
    menuLinks.forEach(link => {
        link.textContent = link.textContent.replace(/\((.*?)\)/, '$1');
        link.classList.remove('active');
    });

    closeTimeout = setTimeout(() => {
        catalog.style.display = 'none';
        menu.classList.remove('active');
        catalogItem.classList.remove('active');
    }, 500);
});