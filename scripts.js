const openbtn = document.querySelector('.open');
const filescreen = document.querySelector('.filescreen');

const clock = document.querySelector('.clock');
const folder_area = document.querySelectorAll('.folder-area');

openbtn.addEventListener('click', () => {
    filescreen.classList.toggle('active');
    const filescreen_on = filescreen.classList.contains('active');
    if (filescreen_on) {
        clock.style.opacity = '0';
    } else {
        clock.style.opacity = '1';
    }
});

const folders = document.querySelectorAll('.folder-area');
folders.forEach(folder => {
    folder.addEventListener('click', () => {
        const name = folder.dataset.folder;
        const target = document.querySelector(`.for-${name}`);
        if (target) {
            target.classList.toggle('active');
        }
    });
});

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.dataset.content;
        const target = document.querySelector(`.for-${name}`);
        if (target) {
            target.classList.toggle('active');
        }
    });
});
