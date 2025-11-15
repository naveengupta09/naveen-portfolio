// Only initialize if elements exist
const webBtns = document.querySelectorAll('#skills #web .btn');
const dsaBtns = document.querySelectorAll('#skills #dsa .btn');
if (webBtns.length > 0) optionSlector(webBtns);
if (dsaBtns.length > 0) optionSlector(dsaBtns);
const navLinks = document.querySelectorAll('.nav-item a');

const sections = document.querySelectorAll('.body > section');
const [heroSection, aboutSection, educationSection, projectsSection, skillsSection] = sections;
const nav = document.querySelector('nav');

navLinks.forEach(link=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offsetTop = targetSection.offsetTop - nav.clientHeight;

        window.scrollTo({top: offsetTop});
    })
})

// active link on scroll
window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - nav.clientHeight;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});


function optionSlector(options){
    options.forEach(option=>{
        option.addEventListener('click', ()=>{
            options.forEach(e=>e.classList.remove('active'));
            option.classList.add('active');
        })
    })
}

const projects = document.querySelector('#projects .card-wrapper');
fetch('projects.json')
    .then((res) => {
        if (res.ok) return res.json();
    })
    .then(data => {
        renderProjects(projects, data.projects);
    })
    .catch(e => {
        console.error(e);
    });

function renderProjects(parent, data) {
    if (!parent || !data || data.length === 0) {
        console.warn('No projects to render or parent element not found');
        if (parent) {
            parent.innerHTML = '<p style="text-align: center; color: var(--old-white); padding: 20px;">No projects available. Please add projects to projects.json</p>';
        }
        return;
    }

    const btnFragments = (btns) => {
        if (!btns || btns.length === 0) return '';
        return btns.map(({ href, text }) => {
            const icon = text.toLowerCase().includes('code') || text.toLowerCase().includes('github') 
                ? `<img src="./assets/social icons/github.svg" alt="Github Icon" />`
                : text.toLowerCase().includes('demo') || text.toLowerCase().includes('live')
                ? `<img src="./assets/icons/external-link.svg" alt="Live Link" />`
                : '';
            return `<a target="_blank" href="${href || '#'}" class="btn ${text.toLowerCase().includes('demo') || text.toLowerCase().includes('live') ? 'primary' : ''}">${icon}${text}</a>`;
        });
    };

    const htmlFragments = data.map((e) => {
        // Fix image path if it doesn't start with ./
        let imagePath = e.image || 'assets/project-preview/default.png';
        if (!imagePath.startsWith('./') && !imagePath.startsWith('http')) {
            imagePath = './' + imagePath;
        }
        
        return `
            <div class="card">
                <div class="wrapper">
                    <div class="preview">
                        <img src="${imagePath}" alt="${e.name || 'Project preview'}" loading="lazy">
                    </div>
                    <div class="content">
                        <h4>${e.name || 'Project Name'}</h4>
                        <p class="text-muted-foreground">${e.description || 'Project description'}</p>
                        <div class="btn-wrapper">
                            ${btnFragments(e.btns || []).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // Join all HTML fragments into a single string and assign to innerHTML
    parent.innerHTML = htmlFragments.join('');
}


// helper function to update chart data on btn interaction
function updateChart(field, type) {
    if (!skillData) return;
    
    let labels, values;
    if (type == 'dsa') {
        if (!dsa_chart || !dsa_skillElement) return;
        labels = Object.keys(skillData.DSA[field]);
        values = Object.values(skillData.DSA[field]);
        updateDataset(dsa_chart, dsa_skillElement, labels, values, field);
    }
    else {
        if (!web_chart || !web_skillElement) return;
        labels = Object.keys(skillData[field]);
        values = Object.values(skillData[field]);
        updateDataset(web_chart, web_skillElement, labels, values, field);
    }
}