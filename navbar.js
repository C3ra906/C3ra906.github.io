//navbar elements
let navbar = document.querySelector("#navbar");
let nav = document.createElement("nav");

let btn1 = document.createElement("div");
btn1.setAttribute("class", "button");
let index = document.createElement("a");
index.setAttribute("href", "index.html");
index.setAttribute("class", "nav-link");
index.innerHTML = "Home";

let btn2 = document.createElement("div");
btn2.setAttribute("class", "button");
let about = document.createElement("a");
about.setAttribute("href", "about.html");
about.setAttribute("class", "nav-link");
about.innerHTML = "About";

let btn3 = document.createElement("div");
btn3.setAttribute("class", "button");
let previous = document.createElement("a");
previous.setAttribute("href", "previous.html");
previous.setAttribute("class", "nav-link");
previous.innerHTML = "Previous Work";

let btn4 = document.createElement("div");
btn4.setAttribute("class", "button");
let projects = document.createElement("a");
projects.setAttribute("href", "projects.html");
projects.setAttribute("class", "nav-link");
projects.innerHTML = "Projects";

let btn5 = document.createElement("div");
btn5.setAttribute("class", "button");
let contact = document.createElement("a");
contact.setAttribute("href", "contact.html");
contact.setAttribute("class", "nav-link");
contact.innerHTML = "Contact";

let btn6 = document.createElement("div");
btn6.setAttribute("class", "button");
let logo = document.createElement("img");
logo.setAttribute("src", "imgs/logo.png");
logo.setAttribute("alt", "logo C O");
logo.setAttribute("id", "logo");
logo.setAttribute("class", "logo");

//Navbar element styles
nav.style.background = "var(--grad)";

btn1.style.float = "left";
btn2.style.float = "left";
btn3.style.float = "left";
btn4.style.float = "left";

logo.style.width = "40px";
logo.style.height = "40px";
logo.style.boxSizing = "border-box";
logo.style.display = "inline-block";
logo.style.margin = "20px";
logo.style.float = "left";

index.style.float = "left";
index.style.color = "white";
index.style.textDecoration = "none";

about.style.boxSizing = "border-box";
about.style.display = "inline-block";
about.style.float = "left";
about.style.color = "white";
about.style.textDecoration = "none";

previous.style.boxSizing = "border-box";
previous.style.display = "inline-block";
previous.style.color = "white";
previous.style.textDecoration = "none";

projects.style.boxSizing = "border-box";
projects.style.display = "inline-block";
projects.style.color = "white";
projects.style.textDecoration = "none";

contact.style.boxSizing = "border-box";
contact.style.display = "inline-block";
contact.style.color = "white";
contact.style.textDecoration = "none";

//Footer elements
let foot = document.querySelector("#foot");
let footer = document.createElement("p");
footer.setAttribute("class", "footer");
footer.innerHTML = "(c) Cera Oh 2022 - CS510 Intro to Web Dev Final Project";

//Footer element styles
foot.style.background = "var(--grad)";
foot.style.padding = "20px";
footer.style.color = "var(--white)";
foot.style.textAlign = "right";

//Add to DOM
navbar.appendChild(nav);
nav.appendChild(btn6);
btn6.appendChild(logo);
nav.appendChild(btn1);
btn1.appendChild(index);
nav.appendChild(btn2);
btn2.appendChild(about);
nav.appendChild(btn3);
btn3.appendChild(previous);
nav.appendChild(btn4);
btn4.appendChild(projects);
nav.appendChild(btn5);
btn5.appendChild(contact);
foot.appendChild(footer);

//Events
btn1.addEventListener("mouseover", function (event) {
  index.style.fontWeight = "bold";
  index.style.color = "pink";
});
btn1.addEventListener("mouseleave", function (event) {
  index.style.color = "white";
  index.style.fontWeight = "normal";
});
btn2.addEventListener("mouseover", function (event) {
  about.style.fontWeight = "bold";
  about.style.color = "pink";
});
btn2.addEventListener("mouseleave", function (event) {
  about.style.fontWeight = "normal";
  about.style.color = "white";
});
btn3.addEventListener("mouseover", function (event) {
  previous.style.color = "pink";
  previous.style.fontWeight = "bold";
});
btn3.addEventListener("mouseleave", function (event) {
  previous.style.color = "white";
  previous.style.fontWeight = "normal";
});
btn4.addEventListener("mouseover", function (event) {
  projects.style.color = "pink";
  projects.style.fontWeight = "bold";
});
btn4.addEventListener("mouseleave", function (event) {
  projects.style.color = "white";
  projects.style.fontWeight = "normal";
});
btn5.addEventListener("mouseover", function (event) {
  contact.style.color = "pink";
  contact.style.fontWeight = "bold";
});
btn5.addEventListener("mouseleave", function (event) {
  contact.style.fontWeight = "normal";
  contact.style.color = "white";
});
