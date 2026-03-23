const logo = document.querySelector("#logo");
const box2 = document.querySelector("#box2");

function getData(form) {
  var formData = new FormData(form);
  const Gender = Object.fromEntries(formData).gender;
  if (Gender === "Female") {
    document.querySelector("#logo").src = "./images/logo_girl.png";
  } else if (Gender === "Male") {
    document.querySelector("#logo").src = "./images/logo_boy.png";
  }
  box2.getElementsByTagName("h1")[0].innerText =
    Object.fromEntries(formData).username;

  box2.getElementsByTagName("h4")[0].innerText =
    Object.fromEntries(formData).short;

  box2.querySelectorAll("p")[0].innerText = Object.fromEntries(formData).bio;

  box2.querySelectorAll("p")[1].innerText =
    Object.fromEntries(formData).contact;
}

const formElem = document.querySelector("form");

formElem.addEventListener("submit", function (e) {
  e.preventDefault();

  getData(e.target);
});

const down_btn = document.querySelector("#download");

down_btn.addEventListener("click", () => {
  html2canvas(box2).then((canvas) => {
    let dataURL = canvas.toDataURL("image/png");
    download(dataURL, "ProfileCard.png", "image/png");
  });
});

const copy_btn = document.querySelector("#copy");

copy_btn.addEventListener("click", async () => {
  const canvas = await html2canvas(box2);
  canvas.toBlob(async (blob) => {
    const item = new ClipboardItem({
      "image/png": blob,
    });

    await navigator.clipboard.write([item]);

    alert("Image copied to clipboard!");
  }, "image/png");
});

const toggle_btn = document.querySelector("#icon1");
let toggle = 0;
const central_box = document.querySelector("#headings").children;

toggle_btn.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (toggle == 0) {
    toggle = 1;
    body.style.backgroundImage = "url(images/image.png)";
    central_box[0].style.color = "#000000";
    central_box[1].style.color = "#c67474";
    toggle_btn.children[0].style.color = "#000000";
  } else if (toggle == 1) {
    console.log("Clicked2");
    toggle = 0;
    body.style.backgroundImage = "url(images/img3.png)";
    central_box[0].style.color = "#ffffff";
    central_box[1].style.color = "#f99595";
    toggle_btn.children[0].style.color = "#ffffff";
  }
});

/*
Project: Profile Card Generator
Author: Sahasra Gubba
Year: 2026
*/
