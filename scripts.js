const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
    updateClock();
    loading.style.opacity = '0';
});

const icons = document.querySelectorAll('.icon');
const alert = document.querySelector('.alert-wrapper');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert.classList.add('active');
        setTimeout(() => {
            alert.classList.remove('active');
        }, 2000);
    });
});

const big_window = document.querySelector('.content-wrapper');
const big_placeholder = document.querySelector('.big-placeholder');
const smol_window1 = document.querySelector('.list-wrapper');
const smol_placeholder = document.querySelector('.smol-placeholder');

document.addEventListener('click', () => {
    placeholder(big_placeholder, big_window);
    placeholder(smol_placeholder, smol_window1);
});

function placeholder(placeholder, target) {
    if (allChildrenHidden(target)) {
        placeholder.classList.add('active');
    } else {
        placeholder.classList.remove('active');
    }
}

const openbtn = document.querySelector('.open');
const filescreen = document.querySelector('.filescreen');
const clock = document.querySelector('.clock');
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
ActivateWindowOnButtonClick(folders, 'folder');

const items = document.querySelectorAll('.item');
ActivateWindowOnButtonClick(items, 'content');

function ActivateWindowOnButtonClick(buttonGroup, dataGroup) {
    buttonGroup.forEach(buttonG => {
        buttonG.addEventListener('click', () => {
            const name = buttonG.dataset[dataGroup];
            const target = document.querySelector(`.for-${name}`);
            if (!target) return;

            const parent = target.parentNode;
            const siblings = Array.from(parent.children);

            siblings.forEach(sibling => {
                if (sibling !== target && sibling.classList.contains('active')) {
                    sibling.classList.remove('active');

                    const iframe = sibling.querySelector('iframe');
                    if (iframe) iframe.removeAttribute('src');

                    // const sources = sibling.querySelectorAll('video source');
                    // sources.forEach(source => {
                    //     source.removeAttribute('src');
                    //     const video = source.closest('video');
                    //     if (video) {
                    //         video.load();
                    //     }
                    // });
                }
            });
            target.classList.toggle('active');

            const isNowVisible = window.getComputedStyle(target).display !== 'none';
            if (isNowVisible) {
                const iframe = target.querySelector('iframe[data-src]');
                if (iframe && !iframe.src) {
                    iframe.src = iframe.dataset.src;
                }
                // const sources = target.querySelectorAll('video source[data-src]');
                // sources.forEach(source => {
                //     if (!source.src) {
                //         source.src = source.dataset.src;
                //         const video = source.closest('video');
                //         if (video) video.load();
                //     }
                // });
            }
        });
    });
}

folders.forEach(folder => {
    folder.addEventListener('click', () => {
        const contentsActive = document.querySelectorAll('.content-group.active');
        if (allChildrenHidden(smol_window1)) {
            contentsActive.forEach(content => {
                content.classList.remove('active');
            });
        }
    });
});

function hideAllSiblings(sibling) {
    const parent = sibling.parentNode;
    const children = Array.from(parent.children);
    children.forEach(child => {
    if (child !== sibling && child.classList.contains('active')) {
        child.classList.remove('active');
    }
  });
}

function allChildrenHidden(parent) {
    const children = Array.from(parent.children);
    return children.every(child => {
    const style = window.getComputedStyle(child);
    return style.display === 'none';
    });
}

const elClock1 = document.getElementById('clock');
const elClock2 = document.getElementById('clockbottom');
const elWeekday = document.getElementById('weekday');
const elMonth = document.getElementById('month');
const elDay = document.getElementById('day');
const elHour = document.getElementById('hour');
const elMinute = document.getElementById('minute');
// const elSecond = document.getElementById('second');

function setTextIfChanged(el, value) {
    if (el && el.textContent !== value) {
        el.textContent = value;
    }
}

function updateClock() {
    const now = new Date();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate().toString();
    const year = now.getFullYear();

    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    // const second = now.getSeconds().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;
    const paddedHour = hour.toString().padStart(2, '0');

    const fullTime = `${weekday}, ${month} ${day}, ${year}`;

    setTextIfChanged(elClock1, fullTime);
    setTextIfChanged(elClock2, fullTime);
    setTextIfChanged(elWeekday, weekday);
    setTextIfChanged(elMonth, month);
    setTextIfChanged(elDay, day);
    setTextIfChanged(elHour, paddedHour);
    setTextIfChanged(elMinute, minute);
    // setTextIfChanged(elSecond, second);
}

setInterval(updateClock, 5000);
