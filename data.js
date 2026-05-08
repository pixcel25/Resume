export const Projects = [
  {
    title: "Church Website",
    summary: " Church website for pomburpa Church",
    githubLink: "https://maededeuspomburpa.com/",
    video: "church-website.webm",
    description:
      "A website made for pomburpa church to share information about the church and its activities made when I was just starting web development this hands on project helped me understand the core principals of css and HTML.",
    features: [
      "use Flexbox & grid",
      "hosted on maededeuspomburpa.com",
      "uses embeddings",
      "CleanUI",
    ],
    techStack: ["HTML", "CSS"],
    image: "church-website.png",
  },

  {
    title: "Note maker",
    summary: " A simple note taking web app",
    githubLink: "https://pixcel25.github.io/Notemaker",
    video: "note-maker.webm",
    description:
      "Note making website made by me to replicate the feel of a post it board, you can add and delete posts and customise the color of the note too. The note also tilts a ceratin degree to give you a effect of a real note. All notes are stored locally in the browser through local storage.",
    features: [
      "uses Flexbox",
      "hosted on github",
      "offers customisation",
      "stores notes in local storage",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "note-maker.png",
  },

  {
    title: "to-do list(REST)",
    summary: " A to do list based on REST",
    githubLink: "https://github.com/pixcel25/todo",
    video: "to-do-rest.webm",
    description:
      "TO-DO list created using JavaScript and Django REST framework, You can create,read,update and delete your to do the beackend is a bunnch of REST API calls to the database which is SQLite. The UI is simple mainly because the focus was the REST implementation.",
    features: [
      "uses Django REST framework",
      "stores data in SQLite",
      "has all CRUD operations ",
      "Simple styling",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Django REST"],
    image: "todo.png",
  },
];

(function () {
  const skills = [
    { title: "HTML & CSS", description: "Build and style websites" },
    { title: "Javascript", description: "Programming Language" },
    { title: "Git", description: "Version Control System" },
    { title: "Django", description: "Python web framework for Backend" },
    { title: "C", description: "Programming Language" },
    { title: "C++", description: "Programming Language" },
    { title: "Python", description: "Programming Language" },
    {
      title: "Bootstrap",
      description: "CSS framework with pre-built components",
    },
    { title: "SQL Lite", description: "Lightweight database for storing data" },
    { title: "Figma", description: "Design tool for UI/UX mockups" },
    { title: "TypeScript", description: "Typed superset of JavaScript" },
    {
      title: "React",
      description: "JavaScript library for building user interfaces",
    },
    { title: "Java", description: "Programming Language" },
    { title: "SQL", description: "Language to manage and query databases." },
  ];

  const container = document.getElementById("grid-box");

  skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "card box";
    card.setAttribute("data-theme", "dark");

    const heading = document.createElement("h3");
    heading.textContent = skill.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = skill.description;

    card.appendChild(heading);
    card.appendChild(paragraph);

    if (container) {
      container.appendChild(card);
    }
  });
})();
