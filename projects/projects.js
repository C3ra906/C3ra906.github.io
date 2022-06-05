let p1 = document.querySelector("#github1");
let icon1 = document.querySelector("#github-icon1");
let p2 = document.querySelector("#github2");
let icon2 = document.querySelector("#github-icon2");
let p3 = document.querySelector("#github3");
let icon3 = document.querySelector("#github-icon3");
let p4 = document.querySelector("#github4");
let icon4 = document.querySelector("#github-icon4");

//Styles
icon1.style.padding = "0px";
icon2.style.padding = "0px";
icon3.style.padding = "0px";
icon4.style.padding = "0px";
icon1.style.margin = "0px 10px";
icon2.style.margin = "0px 10px";
icon3.style.margin = "0px 10px";
icon4.style.margin = "0px 10px";

//Events
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
project2.addEventListener("mouseleave", function (event) {
  icon2.src = "icons/iconmonstr-github-darkblue.png";
  project2.style.color = "var(--darkblue)";
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
pt4.addEventListener("mouseleave", function (event) {
  icon4.src = "icons/iconmonstr-github-darkblue.png";
  p4.style.color = "var(--darkblue)";
});
