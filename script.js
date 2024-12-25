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

// Adjust on page load and window resize
adjustItemsPerScreen();
window.addEventListener('resize', adjustItemsPerScreen);



// Функция для добавления элементов в список
function addElements() {
    const list = document.querySelector('.header-list-item_list');
    
    // Проверяем, существует ли элемент с классом .header-list-item_list
    if (!list) {
        console.error('Element with class "header-list-item_list" not found!');
        return;
    }

    console.log('Window width:', window.innerWidth);
    
    // Добавляем элемент только если ширина экрана <= 768 и элемент ещё не добавлен
    if (window.innerWidth <= 768 && !list.querySelector('.header-list-item_list-item')) {
        const newListItem1 = document.createElement('li');
        newListItem1.classList.add('header-list-item_list-item');
        newListItem1.innerHTML = `
            <a class="header-list-item_list-item-link" href="#">    
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="white"/>
                    <path d="M5.33337 5.99994V3.59993C5.33339 2.90498 5.5569 2.22489 5.97693 1.64176C6.39695 1.05862 6.99553 0.597355 7.70042 0.313651C8.40531 0.029947 9.18637 -0.0640731 9.94932 0.04294C10.7123 0.149953 11.4245 0.453425 12 0.916724C12.5756 0.453425 13.2878 0.149953 14.0508 0.04294C14.8137 -0.0640731 15.5948 0.029947 16.2997 0.313651C17.0045 0.597355 17.6031 1.05862 18.0232 1.64176C18.4432 2.22489 18.6667 2.90498 18.6667 3.59993V5.99994H20.6667C21.1971 5.99994 21.7058 6.18958 22.0809 6.52715C22.456 6.86472 22.6667 7.32256 22.6667 7.79995V19.806C22.6667 20.9183 22.1757 21.9851 21.3018 22.7716C20.4279 23.5581 19.2426 24 18.0067 24H6.66671C5.25222 24 3.89566 23.4943 2.89547 22.5941C1.89528 21.6939 1.33337 20.473 1.33337 19.2V7.79995C1.33337 7.32256 1.54409 6.86472 1.91916 6.52715C2.29423 6.18958 2.80294 5.99994 3.33337 5.99994H5.33337ZM14.18 22.2C13.6361 21.4978 13.3452 20.662 13.3467 19.806V7.79995H3.33337V19.2C3.33337 19.594 3.41959 19.9841 3.58711 20.348C3.75462 20.712 4.00016 21.0427 4.30968 21.3213C4.61921 21.5999 4.98668 21.8209 5.3911 21.9716C5.79552 22.1224 6.22897 22.2 6.66671 22.2H14.18ZM11.3334 5.99994V3.59993C11.3334 3.12254 11.1227 2.6647 10.7476 2.32714C10.3725 1.98957 9.86381 1.79993 9.33337 1.79993C8.80294 1.79993 8.29423 1.98957 7.91916 2.32714C7.54409 2.6647 7.33337 3.12254 7.33337 3.59993V5.99994H11.3334ZM13.3334 5.99994H16.6667V3.59993C16.6667 3.22941 16.5397 2.86791 16.303 2.56477C16.0663 2.26162 15.7314 2.03161 15.344 1.90613C14.9567 1.78064 14.5357 1.7658 14.1387 1.86363C13.7416 1.96145 13.3877 2.16718 13.1254 2.45273C13.26 2.81273 13.3334 3.19913 13.3334 3.59993V5.99994ZM15.3467 19.806C15.3467 20.4409 15.627 21.0498 16.1258 21.4988C16.6247 21.9478 17.3012 22.2 18.0067 22.2C18.7122 22.2 19.3888 21.9478 19.8876 21.4988C20.3865 21.0498 20.6667 20.4409 20.6667 19.806V7.79995H15.3467V19.806Z" fill="#8D8D8D"/>
                </svg>
            </a>
        `;
        
        list.appendChild(newListItem1);
        console.log('New item added!');
    } else {
        console.log('Conditions not met or item already exists.');
    }
}

// Вызываем функцию при загрузке и при изменении размера экрана
window.addEventListener('resize', addElements);
addElements(); // сразу при загрузке