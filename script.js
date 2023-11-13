// Animation for Project Showcase
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.2}s`;
        project.classList.add('project-animation');
    });
});
