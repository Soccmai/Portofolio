const aboutMe = document.getElementById('infoRobert');
const aboutMeTag = document.getElementById('li-about-me');
const observerAboutMe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            aboutMe.classList.add('show-left');
            aboutMeTag.classList.add('hover-underline');
        }   else {
            aboutMe.classList.remove('show-left');
            aboutMeTag.classList.remove('hover-underline');
        };
    });
});
const hiddenAboutMe = document.querySelectorAll('.hidden-about-me');
hiddenAboutMe.forEach((el) => observerAboutMe.observe(el));



const projects = document.getElementById('project');
const projTitle = document.getElementById('projTitle');
const projTag = document.getElementById('li-projects');
const observerProjects = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            projTitle.classList.add('show-left');
            projects.classList.add('show-box');
            projTag.classList.add('hover-underline');
        }   else {
            projTitle.classList.remove('show-left');
            projects.classList.remove('show-box');
            projTag.classList.remove('hover-underline');
        };
    });
});
const hiddenProjects = document.querySelectorAll('.hidden-projects');
hiddenProjects.forEach((el) => observerProjects.observe(el));



const skill = document.getElementById('skills-icon');
const skillTitle = document.getElementById('skills-title');
const skillTag = document.getElementById('li-skills');
const observerSkills = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            skillTitle.classList.add('show-left');
            skill.classList.add('show-box');
            skillTag.classList.add('hover-underline');
        }   else {
            skillTitle.classList.remove('show-left');
            skill.classList.remove('show-box');
            skillTag.classList.remove('hover-underline');
        };
    });
});
const hiddenSkills = document.querySelectorAll('.hidden-skills');
hiddenSkills.forEach((el) => observerSkills.observe(el));



const contact = document.getElementById('contact');
const contactTag = document.getElementById('li-contact');
const observerContact = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            contact.classList.add('show-left');
            contactTag.classList.add('hover-underline');
        }   else {
            contact.classList.remove('show-left');
            contactTag.classList.remove('hover-underline');
        };
    });
});
const hiddenContact = document.querySelectorAll('.hidden-contact');
hiddenContact.forEach((el) => observerContact.observe(el));