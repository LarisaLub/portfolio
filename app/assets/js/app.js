document.querySelector('.hamburger')
    .addEventListener('click', () => {

        const navElem = document.querySelector('header nav');
        navElem.className = navElem.className + ' active';
    });