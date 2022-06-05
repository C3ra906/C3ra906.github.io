let download = document.querySelector("#download");
let idownload = document.querySelector("#dl-icon");

//Styles
download.style.textDecoration = "none";
download.style.padding = "20px";
idownload.style.padding = "0px";

//Events
download.addEventListener("mouseover", function (event) {
  idownload.src = "icons/iconmonstr-download-pink.png";
  download.style.color = "var(--pink)";
});
download.addEventListener("mouseleave", function (event) {
  idownload.src = "icons/iconmonstr-download-darkblue.png";
  download.style.color = "var(--darkblue)";
});
