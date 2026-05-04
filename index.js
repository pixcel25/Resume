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
  // Get the container where cards will be added
  const container = document.getElementById("grid-box");
  // Create cards from the list
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

// id should be in increment format
// description should be about 50-60 words
// summary should be max 10 words
// features and techStack should be 4 li max
// image should be project-name.fileType format
const Projects = [
  {
    id: 1,
    title: "Church Website",
    description:
      " Church website for pomburpa Church uses modern HTML & CSS methods to Display a beautiful Information rich UI ",
    link: "https://maededeuspomburpa.com",
    video: "church-website.webm",
    summary: "Website made for pomburpa church.",
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
    id: 2,
    title: "Note Maker",
    summary: "Website for simple note making",
    description:
      " A simple note making web app the trys to replicate small post it notes, allows customisation and saves notes in the browsers local storage ",
    link: "https://pixcel25.github.io/Notemaker/",
    video: "note-maker.webm",

    features: [
      "use Flexbox & grid",
      "hosted on GitHub",
      "Implements Skeumorphism",
      "CleanUI & note customisation",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "note-maker.png",
  },
];

function displayProject(id) {
  for (let i = 0; i < Projects.length; i++) {
    if (id === Projects[i].id) {
      let title = document.getElementById("title");
      let description = document.getElementById("description");
      let featureList = document.getElementById("feature-list");
      let techStack = document.getElementById("tech-stack");
      let video = document.getElementById("video");
      description.innerText = Projects[i].description;
      title.innerText = Projects[i].title;
      title.setAttribute("href", Projects[i].link);

      featureList.innerHTML = "";
      for (j = 0; j < Projects[i].features.length && j < 4; j++) {
        let li = document.createElement("li");
        li.innerText = Projects[i].features[j];
        featureList.append(li);
      }

      techStack.innerHTML = "";
      for (j = 0; j < Projects[i].techStack.length && j < 4; j++) {
        let li = document.createElement("li");
        li.innerText = Projects[i].techStack[j];
        techStack.append(li);
      }

      video.setAttribute("src", Projects[i].video);
    }
  }
}
