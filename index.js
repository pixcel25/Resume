
(function () {
    // List of skills
    const skills = [
        { title: "HTML & CSS", description: "Build and style websites" },
        { title: "Javascript", description: "Programming Language" },
        { title: "Git", description: "Version Control System" },
        { title: "Django", description: "Python web framework for Backend" },
        { title: "C", description: "Programming Language" },
        { title: "C++", description: "Programming Language" },
        { title: "Python", description: "Programming Language" },
        { title: "Bootstrap", description: "CSS framework with pre-built components" },
        { title: "SQL Lite", description: "Lightweight database for storing data" },
        { title: "Figma", description: "Design tool for UI/UX mockups" },
        { title: "TypeScript", description: "Typed superset of JavaScript" },
        { title: "React", description: "JavaScript library for building user interfaces" },
        { title: "Java", description: "Programming Language" },
        { title: "SQL", description: "Language to manage and query databases." }
    ];
    // Get the container where cards will be added
    const container = document.getElementById('grid-box');
    // Create cards from the list
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'card box';
        card.setAttribute('data-theme', 'dark');
        const heading = document.createElement('h3');
        heading.textContent = skill.title;
        const paragraph = document.createElement('p');
        paragraph.textContent = skill.description;
        card.appendChild(heading);
        card.appendChild(paragraph);
        if (container) {
            container.appendChild(card);
        }
    });
})();


const Projects = [
    {
        title: "Church Website",
        description: " Church website for pomburpa Church",
        githubLink: "https://maededeuspomburpa.com/",
        video: "",
        summary : "A website made for pomburpa church to share information about the church and its activities",
        features : ["use Flexbox & grid","hosted on maededeuspomburpa.com", "uses embeddings","CleanUI"],
        techStack : ["HTML","CSS"],
        image : "",

    }
]

