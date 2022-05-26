let navbar = document.querySelector("#navbar");

//navbar elements
let nav = document.createElement("nav");
//let test = document.createTextNode("This is a test message");
let index = document.createElement("a");
index.href = "index.html";
index.setAttribute("class", "nav-link");
let indextxt = document.createTextNode("Home");
let about = document.createElement("a");
about.href = "about.html";
about.setAttribute("class", "nav-link");
let abouttxt = document.createTextNode("About");

let previous = document.createElement("a");
previous.href = "previous.html";
previous.setAttribute("class", "nav-link");
let previoustxt = document.createTextNode("Previous Work");

let projects = document.createElement("a");
projects.href = "projects.html";
projects.setAttribute("class", "nav-link");
let projectstxt = document.createTextNode("Projects");

let contact = document.createElement("a");
contact.href = "contact.html";
contact.setAttribute("class", "nav-link");
let contacttxt = document.createTextNode("Contact");

//Style
nav.style.backgroundColor = "purple";
nav.style.fontSize = "100%";
//nav.style.float = "left";

index.style.boxSizing = "border-box";
index.style.display = "inline-block";
index.style.color = "white";
index.style.backgroundColor = "purple";
index.style.textDecoration = "none";
index.style.padding = "30px";

about.style.boxSizing = "border-box";
about.style.display = "inline-block";
about.style.color = "white";
about.style.backgroundColor = "purple";
about.style.textDecoration = "none";
about.style.padding = "30px";

previous.style.boxSizing = "border-box";
previous.style.display = "inline-block";
previous.style.color = "white";
previous.style.backgroundColor = "purple";
previous.style.textDecoration = "none";
previous.style.padding = "30px";

projects.style.boxSizing = "border-box";
projects.style.display = "inline-block";
projects.style.color = "white";
projects.style.backgroundColor = "purple";
projects.style.textDecoration = "none";
projects.style.padding = "30px";

contact.style.boxSizing = "border-box";
contact.style.display = "inline-block";
contact.style.color = "white";
contact.style.backgroundColor = "purple";
contact.style.textDecoration = "none";
contact.style.padding = "30px";

//Add to DOM
navbar.appendChild(nav);
//navbar.appendChild(test);
nav.appendChild(index);
index.appendChild(indextxt);
nav.appendChild(about);
about.appendChild(abouttxt);
nav.appendChild(previous);
previous.appendChild(previoustxt);
nav.appendChild(projects);
projects.appendChild(projectstxt);
nav.appendChild(contact);
contact.appendChild(contacttxt);
