import { mainPlaceholderTemplate } from './about.js';
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading')
    loading.classList.remove('active')
})
const listStage = document.querySelector('#list-stage')
const mainStage = document.querySelector('#main-stage')

const nav_btn = document.querySelectorAll('nav img')
const popup = document.querySelector('.popup')
nav_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.add('active')
        setTimeout( () => {
            popup.classList.remove('active')
        }, 2000)
    })
})

const desktop_icon = document.querySelector('.desktop-icon')
const dashboard = document.querySelector('.dashboard')
desktop_icon.addEventListener('click', () => {
    dashboard.classList.toggle('active')
})

const contents = {
    websites: [
        { name: "Art Portfolio Site (Collab)", iframe_url: "https://hehihart-site.netlify.app/", url: "https://hehihart-site.netlify.app/" },
        { name: "Neocities Type Site", iframe_url: "https://han-nah.netlify.app/", url: "https://han-nah.netlify.app/" },
        { name: "Trashy Quiz Site", iframe_url: "https://areyoupsychotic.netlify.app/", url: "https://areyoupsychotic.netlify.app/" },
    ],
    web_apps: [
        { name: "Notes App", iframe_url: "https://js-write-notes.netlify.app/", url: "https://js-write-notes.netlify.app/" },
        { name: "Pink Calculator", iframe_url: "https://athing.netlify.app/", url: "https://athing.netlify.app/" },
    ],
    games: [
        { name: "RenPy VN (Collab)", iframe_url: "https://itch.io/embed-upload/13851253?color=190000", url: "https://naour.itch.io/i-am-the-problem" },
        { name: "Scratch Shooter", iframe_url: "https://itch.io/embed-upload/12189515?color=e53b44", url: "https://naour.itch.io/gayme" },
        { name: "JS Dino", iframe_url: "https://dino-copy.netlify.app/", url: "https://dino-copy.netlify.app/" },
        { name: "JS Snake", iframe_url: "https://snek-gaim.netlify.app/", url: "https://snek-gaim.netlify.app/" },
        { name: "JS Memory", iframe_url: "https://memory-gaim.netlify.app/", url: "https://memory-gaim.netlify.app/" },
        { name: "JS TicTacToe", iframe_url: "https://lickmytoe.netlify.app/", url: "https://lickmytoe.netlify.app/" },
    ],
    guitar: [
        { name: "The Worst - Polyphia", iframe_url: "https://www.youtube.com/embed/L8wA4-maRWQ?si=XxF8BfgE78sXBWQe", url: "https://youtu.be/L8wA4-maRWQ?si=QD_nyHDOvxz0rKak", type: "video" },
        { name: "Glimmer - Covet", iframe_url: "https://www.youtube.com/embed/1nRaKhhFCS0?si=GDnMbqLCVyY8qd7K", url: "https://youtu.be/1nRaKhhFCS0?si=GDnMbqLCVyY8qd7K", type: "video" },
        { name: "Playing God - Polyphia", iframe_url: "https://www.youtube.com/embed/9GiQZgoF2ag?si=Gf96lT7MXZ_ofgNi", url: "https://youtu.be/9GiQZgoF2ag?si=Gf96lT7MXZ_ofgNi", type: "video" },
        { name: "ABC - Polyphia", iframe_url: "https://www.youtube.com/embed/wdWkg_7-STY?si=jEovoGQGwuO7vAqt", url: "https://youtu.be/wdWkg_7-STY?si=jEovoGQGwuO7vAqt", type: "video" },
        { name: "Let Her Go - Passenger", iframe_url: "https://www.youtube.com/embed/Kjg-cZNJqko?si=u7SFfHBjUDc7PkRS", url: "https://youtu.be/Kjg-cZNJqko?si=u7SFfHBjUDc7PkRS", type: "video" },
        { name: "IRWTSAYH - Cyberpunk: Edgerunners", iframe_url: "https://www.youtube.com/embed/7q2-KJmxbk8?si=XX7KUrgPrmqzc0oc", url: "https://youtu.be/7q2-KJmxbk8?si=XX7KUrgPrmqzc0oc", type: "video" },
        { name: "GOAT - Polyphia", iframe_url: "https://www.youtube.com/embed/RzkLWdB4ESY?si=EQJO_iBLOiAHMcJ5", url: "https://youtu.be/RzkLWdB4ESY?si=EQJO_iBLOiAHMcJ5", type: "video" },
        { name: "River Flows In You - Yiruma", iframe_url: "https://www.youtube.com/embed/yECOHvwZVqo?si=bU5PvJXeErXTespu", url: "https://youtu.be/yECOHvwZVqo?si=bU5PvJXeErXTespu", type: "video" },
    ],
    assignments: [
        { name: "DCIT21 Activity", iframe_url: "https://dcit21.netlify.app/", url: "https://dcit21.netlify.app/" },
        { name: "ITEC50 Final Project (Group)", iframe_url: "https://itec50-final.netlify.app/", url: "https://itec50-final.netlify.app/" },
        { name: "ArtApp Midterm Project (Section)", iframe_url: "https://1-5-virtual-museum.netlify.app/", url: "https://1-5-virtual-museum.netlify.app/" }
    ],
    python: [
        { name: "ASL Thing", iframe_url: " ", url: "https://github.com/Naourr/Hand-Gestures-thang", type: "no_embed" },
        { name: "Sodoku Solver (Collab)", iframe_url: "https://sodoku-pyodide.netlify.app/", url: "https://sodoku-pyodide.netlify.app/" },
    ],
    wallpapers: [
        { name: "Pixel Art Gif", iframe_url: " ", url: "/assets/bg.gif", type: "wallpaper" },
        { name: "Jinx", iframe_url: " ", url: "/assets/bgjinx.jpg", type: "wallpaper" },
        { name: "Tokyo Night", iframe_url: " ", url: "/assets/bgtokyo.png", type: "wallpaper" }
    ]
}

let currentActiveCategory = null;
const folders = document.querySelectorAll('#folder-stage > div')
folders.forEach(folder => {
    folder.addEventListener('click', () => {
        const selectedCategory = folder.dataset.category;
        if (currentActiveCategory === selectedCategory) {
            showListPlaceholder()
            currentActiveCategory = null;
        } else {
            listStage.innerHTML = '<legend>List Stage</legend>'
            showInListStage(contents[selectedCategory])
            currentActiveCategory = selectedCategory;
        }
    })
})

function showMainPlaceholder() {
    mainStage.innerHTML = '<legend>Main Stage</legend>'
    
    const placeholder = document.createElement('div')
    placeholder.className = 'col placeholder active'
    placeholder.innerHTML = mainPlaceholderTemplate
    mainStage.appendChild(placeholder)
}
function showListPlaceholder() {
    listStage.innerHTML = `<legend>List Stage</legend><img src="/assets/ascii_p1.gif">`
}

let currentActiveProject = null;
function showInListStage(list) {
    list.forEach(project => {
        const item = document.createElement('p')
        item.innerText = project.name
        item.addEventListener('click', () => {
            if (currentActiveProject === project) {
                showMainPlaceholder()
                currentActiveProject = null;
            } else {
                showInMainStage(project)
            }
        })
        listStage.appendChild(item)
    })
}

function showInMainStage(project) {
    currentActiveProject = project;
    mainStage.innerHTML = '<legend>Main Stage</legend>'
    const frame = document.createElement('iframe')
    frame.style.border = '0px'
    let finalUrl = project.iframe_url
    if (project.type === "video") {
        finalUrl = finalUrl + "&autoplay=1"
        frame.setAttribute('allow', 'autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture')
        frame.setAttribute('allowfullscreen', 'true')
    } else if (project.type === "wallpaper") {
        const imageContainer = document.createElement('div')
        imageContainer.className = 'wallpaper-preview'
        const image = document.createElement('img')
        image.src = project.url
        image.alt = project.name
        imageContainer.appendChild(image)
        mainStage.appendChild(imageContainer)
        document.body.style.backgroundImage = `url("${project.url}")`
        return
    }
    frame.src = finalUrl
    const link = document.createElement('a')
    link.href = project.url
    link.textContent = project.url
    link.target = "_blank"
    mainStage.appendChild(frame)
    if (project.type === "no_embed") {
        const text = document.createElement('h4')
        text.textContent = "Nothing to Embed."
        mainStage.appendChild(text)
    }
    mainStage.appendChild(link)
}
showMainPlaceholder()
showListPlaceholder()

const elDate = document.getElementById('date');
const elWeekday = document.getElementById('weekday');
const elMonth = document.getElementById('month');
const elDay = document.getElementById('day');
const elHour = document.getElementById('hour');
const elMinute = document.getElementById('minute');

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
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    const paddedHour = hour.toString().padStart(2, '0');
    const fullTime = `${weekday}, ${month} ${day}, ${year}`;
    setTextIfChanged(elDate, fullTime);
    setTextIfChanged(elWeekday, weekday);
    setTextIfChanged(elMonth, month);
    setTextIfChanged(elDay, day);
    setTextIfChanged(elHour, paddedHour);
    setTextIfChanged(elMinute, minute);
}
updateClock()
setInterval(updateClock, 10000);