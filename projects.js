let p1 = document.querySelector("#github1");
let icon1 = document.querySelector("#github-icon1");
let p2 = document.querySelector("#github2");
let icon2 = document.querySelector("#github-icon2");
let p3 = document.querySelector("#github3");
let icon3 = document.querySelector("#github-icon3");
let p4 = document.querySelector("#github4");
let icon4 = document.querySelector("#github-icon4");

let larrow = document.querySelector("#side-l");
let rarrow = document.querySelector("#side-r");
let left = document.querySelector("#left-icon");
let right = document.querySelector("#right-icon");
let sideways = document.querySelector("#sideways");
let project1 = document.querySelector("#project1");
let project2 = document.querySelector("#project2");
let project3 = document.querySelector("#project3");
let project4 = document.querySelector("#project4");

//Styles
icon1.style.padding = "0px";
icon2.style.padding = "0px";
icon3.style.padding = "0px";
icon4.style.padding = "0px";
icon1.style.margin = "0px 10px";
icon2.style.margin = "0px 10px";
icon3.style.margin = "0px 10px";
icon4.style.margin = "0px 10px";

left.style.height = "50px";
right.style.height = "50px";

project1.style.display = "inline-block";
project2.style.display = "none";
project3.style.display = "none";
project4.style.display = "none";

//Events
larrow.addEventListener("mouseover", function (event) {
  left.src = "icons/iconmonstr-arrow-left-circle-filled-pink.png";
});
larrow.addEventListener("mouseleave", function (event) {
  left.src = "icons/iconmonstr-arrow-left-circle-filled-darkblue.png";
});
larrow.addEventListener("click", function (event) {
  if (project1.style.display === "inline-block") {
    project4.style.display = "inline-block";
    project1.style.display = "none";
  } else if (project2.style.display === "inline-block") {
    project1.style.display = "inline-block";
    project2.style.display = "none";
  } else if (project3.style.display === "inline-block") {
    project2.style.display = "inline-block";
    project3.style.display = "none";
  } else {
    project3.style.display = "inline-block";
    project4.style.display = "none";
  }
});

rarrow.addEventListener("mouseover", function (event) {
  right.src = "icons/iconmonstr-arrow-right-circle-filled-pink.png";
});
rarrow.addEventListener("mouseleave", function (event) {
  right.src = "icons/iconmonstr-arrow-right-circle-filled-darkblue.png";
});
rarrow.addEventListener("click", function (event) {
  if (project1.style.display === "inline-block") {
    project2.style.display = "inline-block";
    project1.style.display = "none";
  } else if (project2.style.display === "inline-block") {
    project3.style.display = "inline-block";
    project2.style.display = "none";
  } else if (project3.style.display === "inline-block") {
    project4.style.display = "inline-block";
    project3.style.display = "none";
  } else {
    project1.style.display = "inline-block";
    project4.style.display = "none";
  }
});
p1.addEventListener("mouseover", function (event) {
  icon1.src = "icons/iconmonstr-github-pink.png";
  p1.style.color = "var(--pink)";
});
p1.addEventListener("mouseleave", function (event) {
  icon1.src = "icons/iconmonstr-github-darkblue.png";
  p1.style.color = "var(--darkblue)";
});

p2.addEventListener("mouseover", function (event) {
  icon2.src = "icons/iconmonstr-github-pink.png";
  p2.style.color = "var(--pink)";
});
p2.addEventListener("mouseleave", function (event) {
  icon2.src = "icons/iconmonstr-github-darkblue.png";
  p2.style.color = "var(--darkblue)";
});

p3.addEventListener("mouseover", function (event) {
  icon3.src = "icons/iconmonstr-github-pink.png";
  p3.style.color = "var(--pink)";
});
p3.addEventListener("mouseleave", function (event) {
  icon3.src = "icons/iconmonstr-github-darkblue.png";
  p3.style.color = "var(--darkblue)";
});

p4.addEventListener("mouseover", function (event) {
  icon4.src = "icons/iconmonstr-github-pink.png";
  p4.style.color = "var(--pink)";
});
p4.addEventListener("mouseleave", function (event) {
  icon4.src = "icons/iconmonstr-github-darkblue.png";
  p4.style.color = "var(--darkblue)";
});
