let connect = document.querySelector("#connect");
let linkedin = document.querySelector("#linkedin");
let github = document.querySelector("#github");
let email = document.querySelector("#email");
let ilinkedin = document.querySelector("#linkedin-icon");
let igithub = document.querySelector("#github-icon");
let iemail = document.querySelector("#email-icon");

linkedin.addEventListener("mouseover", function (event) {
  ilinkedin.src = "icons/iconmonstr-linkedin-pink.png";
});
linkedin.addEventListener("mouseleave", function (event) {
  ilinkedin.src = "icons/iconmonstr-linkedin-darkblue.png";
});
github.addEventListener("mouseover", function (event) {
  igithub.src = "icons/iconmonstr-github-pink.png";
});
github.addEventListener("mouseleave", function (event) {
  igithub.src = "icons/iconmonstr-github-darkblue.png";
});
email.addEventListener("mouseover", function (event) {
  iemail.src = "icons/iconmonstr-email-pink.png";
});
email.addEventListener("mouseleave", function (event) {
  iemail.src = "icons/iconmonstr-email-darkblue.png";
});
