let navbar = document.querySelector("#navbar");

//navbar elements
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
logo.setAttribute("src", "logo.png");
logo.setAttribute("alt", "logo C O");
logo.setAttribute("id", "logo");

//icons
// let home = document.createElement("img");
// home.setAttribute("src", "/icons/iconmonstr-home-7-240.png");
// home.setAttribute("alt", "homepage");
// home.setAttribute("href", "index.html");
// home.setAttribute("class", "icon");
// home.style.display = "none";
// let person = document.createElement("img");
// person.setAttribute("src", "/icons/iconmonstr-user-7.svg");
// person.setAttribute("alt", "about page");
// person.setAttribute("href", "about.html");
// person.setAttribute("class", "icon");
// person.style.display = "none";
// let mail = document.createElement("img");
// mail.setAttribute("src", "/icons/iconmonstr-home-7-240.png");
// mail.setAttribute("alt", "homepage");
// mail.setAttribute("href", "index.html");
// mail.setAttribute("class", "icon");

//Style
nav.style.backgroundColor = "purple";

btn1.style.float = "left";
btn2.style.float = "left";
btn3.style.float = "left";
btn4.style.float = "left";
//btn5.style.float = "right";
// btn1.style.boxSizing = "border-box";
// btn1.style.display = "inline-block";
// btn2.style.boxSizing = "border-box";
// btn2.style.display = "inline-block";
// btn3.style.boxSizing = "border-box";
// btn3.style.display = "inline-block";
// btn4.style.boxSizing = "border-box";
// btn4.style.display = "inline-block";
// btn5.style.boxSizing = "border-box";
// btn5.style.display = "inline-block";

//index.style.boxSizing = "border-box";
//index.style.display = "inline-block";

logo.style.width = "40px";
logo.style.height = "40px";
logo.style.boxSizing = "border-box";
logo.style.display = "inline-block";
logo.style.margin = "20px";
logo.style.float = "left";

index.style.float = "left";
index.style.color = "white";
index.style.backgroundColor = "purple";
index.style.textDecoration = "none";
index.style.padding = "30px";

about.style.boxSizing = "border-box";
about.style.display = "inline-block";
about.style.float = "left";
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

//mouseover
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
