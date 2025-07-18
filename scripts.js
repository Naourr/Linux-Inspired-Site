const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    loading.style.opacity = '0';
});




const big_placeholder = document.querySelector('.big-placeholder');
const smol_placeholder = document.querySelector('.smol-placeholder');

document.addEventListener('click', () => {
    const big_window = document.querySelector('.content-wrapper');
    if (allChildrenHidden(big_window)) {
        big_placeholder.classList.add('active');
    } else {
        big_placeholder.classList.remove('active');
    }

    const smol_window1 = document.querySelector('.list-wrapper');
    if (allChildrenHidden(smol_window1)) {
        smol_placeholder.classList.add('active');
    } else {
        smol_placeholder.classList.remove('active');
    }
    
});


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
      weekday: 'long',    // e.g., Monday
      year: 'numeric',
      month: 'long',      // e.g., July
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false        // change to false for 24-hour format
    };

    const formattedTime = now.toLocaleString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
  }

  // Run once immediately, then every second
  updateClock();
  setInterval(updateClock, 1000);

const icons = document.querySelectorAll('.icon');
const alert = document.querySelector('.alert-wrapper');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert.classList.add('active');
        setTimeout(() => {
            alert.classList.remove('active');
        }, 4000);
    });
});
