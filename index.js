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
           ${project.summary}
           ${project.githubLink ? `<br /><br /><a href="${project.githubLink}" target="_blank" rel="noreferrer">Check it out here</a>` : ""}
         </p>
      </div>
    `;

    projectBox.appendChild(card);
  });
}

renderProjectCards();

let currentProjectId = 1;

function viewProject(id, updateUrl = true) {
  if (!id || id < 1 || id > Projects.length) id = 1;
  currentProjectId = id;

  let title = document.getElementById("title");
  let video = document.getElementById("video");
  let description = document.getElementById("description");
  let features = document.getElementById("features");
  let techStack = document.getElementById("techStack");

  document.querySelectorAll(".project-nav-list a").forEach((item, index) => {
    item.classList.toggle("active", index === id - 1);
  });

  title.innerText = Projects[id - 1].title;
  video.src = `./src/vids/${Projects[id - 1].video}`;
  description.innerText = Projects[id - 1].description;

  features.innerHTML = "";
  for (let j = 0; j < Projects[id - 1].features.length; j++) {
    let li = document.createElement("li");
    li.innerText = Projects[id - 1].features[j];
    features.append(li);
  }

  techStack.innerHTML = "";
  for (let j = 0; j < Projects[id - 1].techStack.length; j++) {
    let li = document.createElement("li");
    li.innerText = Projects[id - 1].techStack[j];
    techStack.append(li);
  }

  if (updateUrl && window.history && window.history.replaceState) {
    const newUrl = `${window.location.pathname}?project=${id}#view-engine`;
    window.history.replaceState({ project: id }, "", newUrl);
  }
}

function shareCurrentProject() {
  const shareUrl = `${window.location.origin}${window.location.pathname}?project=${currentProjectId}#view-engine`;
  const shareToast = document.getElementById("shareToast");
  const shareBtnText = document.getElementById("shareBtnText");

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((resolve, reject) => {
        document.execCommand("copy") ? resolve() : reject();
        textArea.remove();
      });
    }
  };

  copyToClipboard(shareUrl)
    .then(() => {
      if (shareBtnText) shareBtnText.innerText = "Copied!";
      if (shareToast) shareToast.classList.add("show");
      setTimeout(() => {
        if (shareBtnText) shareBtnText.innerText = "Share Project";
        if (shareToast) shareToast.classList.remove("show");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy share link:", err);
      prompt("Copy project share link:", shareUrl);
    });
}

window.viewProject = viewProject;
window.shareCurrentProject = shareCurrentProject;

// Initialize project view from URL parameters if present
const params = new URLSearchParams(window.location.search);
const projectParam = params.get("project");
let initialId = 1;
if (projectParam) {
  const parsed = parseInt(projectParam, 10);
  if (!isNaN(parsed) && parsed >= 1 && parsed <= Projects.length) {
    initialId = parsed;
  }
}
viewProject(initialId, false);
