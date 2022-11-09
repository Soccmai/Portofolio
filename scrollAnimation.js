const aboutMe = document.getElementById('infoRobert');
const observerAboutMe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            aboutMe.classList.add('show-left');
        }   else {
            aboutMe.classList.remove('show-left');
        };
    });
});
const hiddenAboutMe = document.querySelectorAll('.hidden-about-me');
hiddenAboutMe.forEach((el) => observerAboutMe.observe(el));



const projects = document.getElementById('project');
const projTitle = document.getElementById('projTitle');
const observerProjects = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            projTitle.classList.add('show-left');
            projects.classList.add('show-projects');
        }   else {
            projTitle.classList.remove('show-left');
            projects.classList.remove('show-projects');
        };
    });
});
const hiddenProjects = document.querySelectorAll('.hidden-projects');
hiddenProjects.forEach((el) => observerProjects.observe(el));