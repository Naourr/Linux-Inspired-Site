const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
    loading.style.opacity = '0';
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
            if (target) {
                if (!allChildrenHidden(target.parentNode)) {
                    hideAllSiblings(target);
                } 
                target.classList.toggle('active');
            }
        });
    });
}

folders.forEach(folder => {
    folder.addEventListener('click', () => {
        if (allChildrenHidden(smol_window1)) {
            const contentsActive = document.querySelectorAll('.content-group.active')
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

function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true
    };
    const formattedTime = now.toLocaleString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
}

updateClock();
setInterval(updateClock, 1000);

function updateClock1() {
    const now = new Date();

    const weekday = now.toLocaleString('en-US', { weekday: 'short' });
    const month = now.toLocaleString('en-US', { month: 'short' });
    const day = now.getDate();
    // const year = now.getFullYear(); 

    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = hour.toString().padStart(2, '0');

    document.getElementById('weekday').textContent = weekday;
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
    // document.getElementById('year').textContent = year;
    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
}

updateClock1();
setInterval(updateClock1, 1000);

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
