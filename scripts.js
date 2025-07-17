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
const items = document.querySelectorAll('.item');
const content_groups = document.querySelectorAll('.content-group');

folders.forEach(folder => {
    folder.addEventListener('click', () => {
        const name = folder.dataset.folder;
        const target = document.querySelector(`.for-${name}`);
        if (target) {
            // items.forEach(item => {
            //     item.classList.remove('active');
            // });
            target.classList.toggle('active');
        }
    });
});


items.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.dataset.content;
        const target = document.querySelector(`.for-${name}`);
        if (target) {
            // content_groups.forEach(content => {
            //     content.classList.remove('active');
            // });
            target.classList.toggle('active');
        }
    });
});
