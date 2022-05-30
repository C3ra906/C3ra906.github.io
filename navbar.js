let navbar = document.querySelector("#navbar");

//navbar elements
let nav = document.createElement("nav");
//let test = document.createTextNode("This is a test message");
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

//icons
let home = document.createElement("img");
home.setAttribute("src", "/icons/iconmonstr-home-7-240.png");
home.setAttribute("alt", "homepage");
home.setAttribute("href", "index.html");
home.style.visibility = "visible";
home.style.width = "20px";
home.style.height = "20px";
home.style.alignSelf = "center";
home.style.boxSizing = "inline-block";
home.style.display = "inline-block";
//Style
nav.style.backgroundColor = "purple";
nav.style.fontSize = "100%";

index.style.boxSizing = "inline-block";
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
nav.appendChild(btn1);
btn1.appendChild(home);
btn1.appendChild(index);

nav.appendChild(btn2);
btn2.appendChild(about);
//btn2.appendChild(home);
nav.appendChild(btn3);
btn3.appendChild(previous);
//btn3.appendChild(home);
nav.appendChild(btn4);
btn4.appendChild(projects);
//btn4.appendChild(home);
nav.appendChild(btn5);
btn5.appendChild(contact);
//btn5.appendChild(home);

//mouseover
index.addEventListener("mouseover", function (event) {
  //index.style.fontWeight = "bold";
  //index.style.color = "pink";
  //index.style.textDecorationLine = "overline underline";
  index.innerHTML = "";
  home.style.visibility = "visible";
});
index.addEventListener("mouseleave", function (event) {
  index.innerHTML = "Home";
  index.style.color = "white";
  index.style.fontWeight = "normal";
  index.style.textDecoration = "none";
  home.style.visibility = "hidden";
});
about.addEventListener("mouseover", function (event) {
  about.style.color = "pink";
});
about.addEventListener("mouseleave", function (event) {
  about.style.color = "white";
});
previous.addEventListener("mouseover", function (event) {
  previous.style.color = "pink";
});
previous.addEventListener("mouseleave", function (event) {
  previous.style.color = "white";
});
projects.addEventListener("mouseover", function (event) {
  projects.style.color = "pink";
});
projects.addEventListener("mouseleave", function (event) {
  projects.style.color = "white";
});
contact.addEventListener("mouseover", function (event) {
  contact.style.color = "pink";
});
contact.addEventListener("mouseleave", function (event) {
  contact.style.color = "white";
});
