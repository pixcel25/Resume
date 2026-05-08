import { Projects } from "./data.js";
console.log(Projects);

// ✅ Auto-generates project cards from the Projects array
function renderProjectCards() {
  const projectBox = document.querySelector(".project-box");
  projectBox.innerHTML = ""; // Clear existing hardcoded cards

  Projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card project-card";
    card.setAttribute("data-theme", "dark");

    card.innerHTML = `
      <div class="img-div">
        <img src="src/images/projects/${project.image}" alt="${project.title}" />
      </div>
      <div class="detail">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-detail">
          ${project.summary} <br /><br />
          <a href="${project.githubLink}" target="_blank">Check it out here</a>
        </p>
      </div>
    `;

    projectBox.appendChild(card);
  });
}

renderProjectCards();

function viewProject(id) {
  let title = document.getElementById("title");
  let video = document.getElementById("video");
  let description = document.getElementById("description");
  let features = document.getElementById("features");
  let techStack = document.getElementById("techStack");
  let link = document.getElementById("link");

  link.setAttribute("href", Projects[id - 1].githubLink);
  title.innerText = Projects[id - 1].title;
  video.src = `./src/vids/${Projects[id - 1].video}`;
  description.innerText = Projects[id - 1].description;

  features.innerHTML = "";
  for (let j = 0; j < 4 && j < Projects[id - 1].features.length; j++) {
    let li = document.createElement("li");
    li.innerText = Projects[id - 1].features[j];
    features.append(li);
  }

  techStack.innerHTML = "";
  for (let j = 0; j < 4 && j < Projects[id - 1].techStack.length; j++) {
    let li = document.createElement("li");
    li.innerText = Projects[id - 1].techStack[j];
    techStack.append(li);
  }
}

window.viewProject = viewProject;
viewProject(1);
