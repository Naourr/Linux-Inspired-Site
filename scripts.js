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
    placeholder.innerHTML = `
                    <p>
                        <span class='zsh'>『TwinkPad-』</span><span>◤</span>~  ▶ <span>figlet -f shadow "ABOUT ME"</span>
                    </p>
                    <div class='row'>
                        <pre class='figlet'>
 █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
███████║██████╔╝██║   ██║██║   ██║   ██║
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝</pre>
                        <pre class='figlet'>
███╗   ███╗███████╗
████╗ ████║██╔════╝
██╔████╔██║█████╗  
██║╚██╔╝██║██╔══╝  
██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝╚══════╝</pre>
                    </div>
                    <p>
                        <span class='zsh'>『TwinkPad-』</span><span>◤</span>~  ▶ <span>fastfetch</span>
                    </p>
                    <div class='row fastfetch'>
                        <pre class='fastfetch-ascii'>
                    -\`
                   .o+\`
                  \`ooo/
                 \`+oooo:
                \`+oooooo:
                -+oooooo+:
              \`/:-:++oooo+:
             \`/++++/+++++++:
            \`/++++++++++++++:
           \`/+++ooooooooooooo/\`
          ./ooosssso++osssssso+\`
         .oossssso-\`\`\`\`/ossssss+\`
        -osssssso.      :ssssssso.
       :osssssss/        osssso+++.
      /ossssssss/        +ssssooo/-
    \`/ossssso+/:-        -:/+osssso+-
   \`+sso+:-\`                 \`.-/+oso:
  \`++:.                           \`-/+/
  .\`                                 \`/</pre>
                        <div class='fastdetch-details'>
                            <p><i class="ph ph-user"></i> <span class="fetch-key">user:</span> nein</p>
                            <p><i class="ph ph-desktop"></i> <span class="fetch-key">hname:</span> spectre</p>
                            <p><i class="ph ph-clock"></i> <span class="fetch-key">uptime:</span> 17 seconds</p>
                            <p><i class="ph ph-linux-logo"></i> <span class="fetch-key">distro:</span> EndeavourOS x86_64</p>
                            <p><i class="ph ph-nut"></i> <span class="fetch-key">kernel:</span> Linux 6.18.7-zen1-1-zen</p>
                            <p><i class="ph ph-terminal-window"></i> <span class="fetch-key">term:</span> konsole 25.12.2</p>
                            <p><i class="ph ph-command"></i> <span class="fetch-key">shell:</span> zsh 5.9</p>
                            <p><i class="ph ph-cpu"></i> <span class="fetch-key">cpu:</span> Intel(R) Core(TM) i7-7560U (4) @ 3.80 GHz</p>
                            <p><i class="ph ph-hard-drive"></i> <span class="fetch-key">disk:</span> 31.17 GiB / 95.56 GiB (33%) - ext4</p>
                            <p><i class="ph ph-cpu"></i> <span class="fetch-key">memory:</span> 2.23 GiB / 15.47 GiB (14%)</p>
                            <p><i class="ph ph-wifi-high"></i> <span class="fetch-key">network:</span> 192.168.1.7/24 (wlan0)</p>
                            <p><i class="ph ph-palette"></i> <span class="fetch-key">colors</span>   <span class="c-white">●</span> <span class="c-cyan">●</span> <span class="c-pink">●</span> <span class="c-salmon">●</span> <span class="c-purple">●</span> <span class="c-gray">●</span> <span class="c-black">●</span></p>
                        </div>
                    </div>
                    <p><span class='zsh'>『TwinkPad-』</span><span>◤</span>~  ▶ <span class="cmd-text">cat intro.md</span></p>
                    <div class="terminal-session">
                        <div class="bio-content">
                            <p class="accent-intro">Hello, I am Princess Marielle P. Depalubos, 2nd year BSCS student and DOST scholar at Cavite State University - Main Campus.</p>
                            <p>
                                I dont like talking about myself so lorem ay wait. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                officia, dolorem officiis error fuga quod sequi quidem assumenda iusto consequuntur voluptatibus explicabo.
                            </p>      
                            <p class="social-links">
                                <span class="ln-label">Social Links:</span>
                                <a href="#" target="_blank"><i class="ph ph-github-logo"></i> github</a> | 
                                <a href="#" target="_blank"><i class="ph ph-facebook-logo"></i> facebook</a> | 
                                <a href="#" target="_blank"><i class="ph ph-youtube-logo"></i> youtube</a> | 
                                <a href="#" target="_blank"><i class="ph ph-game-controller"></i> itch.io</a> | 
                                <a href="#" target="_blank"><i class="ph ph-discord-logo"></i> discord</a>
                            </p>
                        </div>
                    </div>
                    <p><span class='zsh'>『TwinkPad-』</span><span>◤</span>~  ▶ <span class="cmd-text">pacman -S cs-skills --noconfirm</span></p>
                    <div class="terminal-session">
                        <div class="pacman-skills-matrix">
                            <div class="pacman-row">
                                <div class="pkg-meta">
                                    <span class="pkg-name">renpy-engine</span>
                                    <span class="pkg-stats">5.7 MiB / 14.2 MiB (40%)</span>
                                </div>
                                <div class="pacman-bar-wrapper">
                                    <span class="pacman-bar">[████████████████████c································]</span>
                                </div>
                            </div>
                            <div class="pacman-row">
                                <div class="pkg-meta">
                                    <span class="pkg-name">web-stack-meta (html/css/js)</span>
                                    <span class="pkg-stats">2.9 MiB / 8.4 MiB (35%)</span>
                                </div>
                                <div class="pacman-bar-wrapper">
                                    <span class="pacman-bar">[██████████████████c··································]</span>
                                </div>
                            </div>
                            <div class="pacman-row">
                                <div class="pkg-meta">
                                    <span class="pkg-name">linux-hardened-kernel</span>
                                    <span class="pkg-stats">36.0 MiB / 120.0 MiB (30%)</span>
                                </div>
                                <div class="pacman-bar-wrapper">
                                    <span class="pacman-bar">[███████████████c·····································]</span>
                                </div>
                            </div>
                            <div class="pacman-row">
                                <div class="pkg-meta">
                                    <span class="pkg-name">python3</span>
                                    <span class="pkg-stats">7.0 MiB / 28.1 MiB (25%)</span>
                                </div>
                                <div class="pacman-bar-wrapper">
                                    <span class="pacman-bar">[████████████c········································]</span>
                                </div>
                            </div>
                            <div class="pacman-row">
                                <div class="pkg-meta">
                                    <span class="pkg-name">openjdk-java-environment</span>
                                    <span class="pkg-stats">6.9 MiB / 34.7 MiB (20%)</span>
                                </div>
                                <div class="pacman-bar-wrapper">
                                    <span class="pacman-bar">[██████████c··········································]</span>
                                </div>
                            </div>
                            <div class="pacman-row">
                                <div class="pkg-meta">
                                    <span class="pkg-name">godot-core-bin</span>
                                    <span class="pkg-stats">6.8 MiB / 45.8 MiB (15%)</span>
                                </div>
                                <div class="pacman-bar-wrapper">
                                    <span class="pacman-bar">[███████c·············································]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p><span class='zsh'>『TwinkPad-』</span><span>◤</span>~  ▶ <span class="cmd-text">cat history.log</span></p>
                    <div class="terminal-session">
                        <div class="bio-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam itaque ex odit nemo similique blanditiis vitae sapiente, 
                                officia, dolorem officiis error fuga quod sequi quidem assumenda iusto consequuntur voluptatibus explicabo.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam itaque ex odit nemo similique blanditiis vitae sapiente, 
                                officia, dolorem officiis error fuga quod sequi quidem assumenda iusto consequuntur voluptatibus explicabo.<br>
                                <br>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam itaque ex odit nemo similique blanditiis vitae sapiente, 
                                officia, dolorem officiis error fuga quod sequi quidem assumenda iusto consequuntur voluptatibus explicabo.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam itaque ex odit nemo similique blanditiis vitae sapiente, 
                                officia, dolorem officiis error fuga quod sequi quidem assumenda iusto consequuntur voluptatibus explicabo.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam itaque ex odit nemo similique blanditiis vitae sapiente.
                            </p>
                        </div>
                    </div>
                    <p><span class='zsh'>『TwinkPad-』</span><span>◤</span>~  ▶ <span class="cmd-text">task status --current</span></p>
                    <div class="terminal-session">
                        <div class="bio-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam itaque ex odit nemo similique blanditiis vitae sapiente, 
                                officia, dolorem officiis error fuga quod sequi quidem assumenda iusto consequuntur voluptatibus explicabo.
                            </p>
                            <ul class="terminal-list">
                                <li><span class="list-bullet">▶</span> <span class="list-category">[cs]</span> Refining this portfolio site and making it responsive.</li>
                                <li><span class="list-bullet">▶</span> <span class="list-category">[cs]</span> After finishing that, try to study three.js so I can help my brother out with his plans for his own portfolio site.</li>
                                <li><span class="list-bullet">▶</span> <span class="list-category">[life]</span> Physically and mentally recovering from last sem, fixing my sleep schedule, and building back the habit of eating 3 times a day lmao.</li>
                                <li><span class="list-bullet">▶</span> <span class="list-category">[life]</span> Trying to workout again, grow my hair, find my type of clothes. Idk I just cant focus on higher things when im so bothered by looking this chopped all the time wah.</li>
                            </ul>
                        </div>
                    </div>`
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