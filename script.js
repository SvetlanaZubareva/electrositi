// горизонтальное меню со скролом
document.getElementById('scrollButton').addEventListener('click', function () {
    const navigationList = document.querySelector('.navigation-list');
    const listItems = navigationList.querySelectorAll('.navigation-list-item');

    // Перемещаем первый элемент в конец списка
    const firstItem = listItems[0];
    navigationList.appendChild(firstItem);

    // Сбрасываем смещение всех элементов
    listItems.forEach((item, index) => {
        item.style.transform = `translateX(${0}px)`;
    });
});


const adjustItemsPerScreen = () => {
    const listItems = document.querySelectorAll('.navigation-list-item');
    const screenWidth = window.innerWidth;

    let itemsPerScreen = 10; // Default for large screens

    if (screenWidth <= 1600) {
        itemsPerScreen = 7; // Show 3 items on medium screens
    }
    if (screenWidth <= 1200) {
        itemsPerScreen = 8.5; // Show 3 items on medium screens
    }
    if (screenWidth <= 992) {
        itemsPerScreen = 6.5; // Show 3 items on medium screens
    }
    if (screenWidth <= 768) {
        itemsPerScreen = 6.5; // Show 3 items on medium screens
    }  
    if (screenWidth <= 480) {
        itemsPerScreen = 3.5; // Show 2 items on small screens
    }

    const itemWidth = `${100 / itemsPerScreen}%`;

    listItems.forEach(item => {
        item.style.width = itemWidth;
    });
};

adjustItemsPerScreen();
window.addEventListener('resize', adjustItemsPerScreen);



// открытие и закрытие мобильного меню

document.querySelector('.header-list-item--serch-button').addEventListener('click', function () {
    modal= document.querySelector('.section-menu-mobil');

    modal.classList.remove('close-modal')
})

document.querySelector('.section-menu-mobil_button').addEventListener('click', function () {
    modal= document.querySelector('.section-menu-mobil');

    modal.classList.add('close-modal')
})
