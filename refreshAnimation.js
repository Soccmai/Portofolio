const homeButton = document.getElementById('li-home');
const home = document.getElementById('homeLogo');
const homeUnder = document.getElementById('underLogo')
function refreshLogo() {
    home.classList.remove('logo-animation')
    home.classList.add('logo-animation');
    setTimeout(function() {
        home.classList.remove('logo-animation');
    }, 1000);

    homeUnder.classList.remove('under-logo-animation')
    homeUnder.classList.add('under-logo-animation');
    setTimeout(function() {
        homeUnder.classList.remove('under-logo-animation');
    }, 1000);
}
homeButton.onclick = refreshLogo;


const aboutMeButton = document.getElementById('li-about-me');   
const aboutMeInfo = document.getElementById('infoRobert');
function refreshAboutMe() {
    aboutMeInfo.classList.add('info-robert-animation');
    setTimeout(function() {
        aboutMeInfo.classList.remove('info-robert-animation');
    }, 1000);
}
aboutMeButton.onclick = refreshAboutMe;


const projectButton = document.getElementById('li-projects');
const projectBox1 = document.getElementById('proj1');
const projectBox2 = document.getElementById('proj2');
const projectBox3 = document.getElementById('proj3');
const projectBox4 = document.getElementById('proj4');
const projectTitle = document.getElementById('projTitle');
function refreshProject() {
    projectBox1.classList.add('scale-in-center');
    setTimeout(function() {
        projectBox1.classList.remove('scale-in-center');
    }, 1000);

    projectBox2.classList.add('scale-in-center');
    setTimeout(function() {
        projectBox2.classList.remove('scale-in-center');
    }, 1000);

    projectBox3.classList.add('scale-in-center');
    setTimeout(function() {
        projectBox3.classList.remove('scale-in-center');
    }, 1000);
    
    projectBox4.classList.add('scale-in-center');
    setTimeout(function() {
        projectBox4.classList.remove('scale-in-center');
    }, 1000);
    
    projectTitle.classList.add('tracking-in-expand-fwd-top');
    setTimeout(function() {
        projectTitle.classList.remove('tracking-in-expand-fwd-top');
    }, 1000);
}
projectButton.onclick = refreshProject;


const skillsButton = document.getElementById('li-skills');   
const skillsBox = document.getElementById('skills-icon');
function refreshSkills() {
    skillsBox.classList.remove('show-box');
    skillsBox.classList.add('show-box');
    setTimeout(function() {
        aboutMeInfo.classList.remove('show-box');
    }, 1000);
}
skillsButton.onclick = refreshSkills;


const contactButton = document.getElementById('li-contact');   
const contactBox = document.getElementById('contact');
function refreshContact() {
    contactBox.classList.remove('show-left');
    contactBox.classList.add('show-left');
    setTimeout(function() {
        aboutMeInfo.classList.remove('show-left');
    }, 1000);
}
contactButton.onclick = refreshContact;