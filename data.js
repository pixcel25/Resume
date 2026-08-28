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

  {
    title: "Chatbot",
    summary: "A conversational chatbot built with React",
    video: "chatbot.webm",
    description:
      "A simple client-side chatbot built with React and Vite. Users can send messages and ask it to flip a coin, roll a die, tell the current date, or respond to a greeting. Responses from the supersimpledev Chatbot utility are displayed as user and robot message bubbles.",
    features: [
      "flips a coin and returns heads or tails",
      "rolls a die and returns a random number",
      "reports the current date",
      "responds to simple greetings",
    ],
    techStack: ["React", "JavaScript", "Vite", "CSS"],
    image: "Pasted image.png",
  },

  {
    title: "Quick Commerce",
    summary: "An e-commerce storefront with cart and checkout",
    video: "quick commerece.webm",
    description:
      "A React and Vite e-commerce application connected to an Express and Sequelize backend. It loads a product list from the API, lets users select quantities and add products to a cart, and provides checkout and order history pages.",
    features: [
      "loads products from the backend API",
      "adds selected quantities to the cart",
      "selects delivery options for cart items",
      "calculates shipping, tax, and order totals",
    ],
    techStack: ["React", "JavaScript", "Vite", "Express + Sequelize"],
    image: "quickCommerce.png",
  },

  {
    title: "Bill Maker",
    summary: "A browser-based invoice and inventory tool",
    video: "billmaker.webm",
    description:
      "A lightweight billing application for creating itemized invoices in the browser. Users can enter company and customer details, add items with quantities and rates, calculate totals, print or save invoices as PDFs, and manage reusable inventory items through a Django REST API backed by SQLite.",
    features: [
      "creates itemized invoices with automatic totals",
      "supports company, customer, and invoice date details",
      "searches reusable inventory items by name",
      "prints invoices or saves them as PDFs",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Django REST", "SQLite"],
    image: "billmaker.png",
  },

  {
    title: "Fake Tweet Generator",
    summary: "A customizable tweet mockup generator",
    githubLink: "https://pixcel25faketweet.vercel.app/",
    video: "fakeTweeet.webm",
    description:
      "A React and TypeScript app for creating realistic tweet mockups. Users can edit the author's name, username, profile image, text, date, time, verification badge, theme, and engagement counts while previewing the result in real time. The finished tweet can be exported as a high-resolution PNG image.",
    features: [
      "updates the tweet preview as fields change",
      "customises author details and profile image",
      "supports hashtags, mentions, and night mode",
      "downloads the finished tweet as a PNG",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "html-to-image"],
    image: "fakeTweet.png",
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
