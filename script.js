import phoneCss from "./phone.css" assert { type: "css" };
import styleCss from "./style.css" assert { type: "css" };

const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const allImages = document.querySelectorAll(".mobile");
const mobileInformation = document.querySelector("#phoneDetail");
const allPhones = document.querySelector("#allPhones");
const phonePageBtn = document.querySelector("#phonePage");
const homePageBtn = document.querySelector("#homePage");
const controls = document.querySelector(".controls");

let phones = [
  {
    id: "3415",
    img: "images/huawei.jpg",
    name: "Huawei Mate 60 Pro",
    camera: "50MP, Wide Laser",
    procesor: "256GB 12GB RAM",
    display: '6.82" Screen-to-body Ratio',
    battery: "Li-Po 5000mAh, non-removable",
  },
  {
    id: "7543",
    img: "images/samsung24.jpg",
    name: "Samsung Galaxy S24 Ultra",
    camera: "200MP, Multi-directional PDAF",
    procesor: "256GB 12GB RAM, UFS 4.0",
    display: '6.8" Dynamic LTPO AMOLED',
    battery: "Li-Ion 5000mAh, non-removable",
  },
  {
    id: "6492",
    img: "images/iphone15promax.jpg",
    name: "IPhone 15 Pro Max",
    camera: "48MP, dual pixel PDAF",
    procesor: "S256GB 8GB RAM, NVMe",
    display: '6.7" LTPO Super Retina XDR OLED',
    battery: "4441mAh, non-removabl",
  },
  {
    id: "2084",
    img: "images/mobile.png",
    name: "SAMSUNG Galaxy A33",
    camera: "12MP, Wide Angle Lens",
    procesor: "Snapdragon Octa-core 11nm",
    display: '6.5" Mini-Drop Fullscreen',
    battery: "5000mAh, 720Hrs Standby",
  },
];

function rotate(deg) {
  let circle = document.getElementById("circle");
  const rotateValue = circle.style.transform || "rotate(0deg)";
  const rotateSum = rotateValue + `rotate(${deg}deg)`;
  circle.style.transform = rotateSum;
}

function displayAllPhone() {
  mobileInformation.style.display = "none";
  allPhones.style.display = "block";
  controls.style.display = "none";
  document.adoptedStyleSheets = [];
  document.adoptedStyleSheets = [phoneCss];
}

function displayPhoneDetail() {
  allPhones.style.display = "none";
  controls.style.display = "block";
  mobileInformation.style.display = "block";
  document.adoptedStyleSheets = [];
  document.adoptedStyleSheets = [styleCss];
}

// Display phone detail
function activePhone(phone = phones[0]) {
  mobileInformation.innerHTML = `
  <div class="overlay"></div>
  <img src=${phone.img} alt="" class="mobile">
  <h2>${phone.name}</h2>
  <div id="circle">
  <div class="feature one">
  <img src="images/camera.png" alt="">
  <div>
  <h1>Camera</h1>
  <p>${phone.camera}</p>
  </div>
  </div>
  <div class="feature two">
  <img src="images/processor.png" alt="">
  <div>
  <h1>Processor</h1>
  <p>${phone.procesor}</p>
  </div>
  </div>
  <div class="feature three">
  <img src="images/display.png" alt="">
  <div>
  <h1>Display</h1>
  <p>${phone.display}</p>
  </div>
  </div>
  <div class="feature four">
  <img src="images/battery.png" alt="">
  <div>
  <h1>Battery</h1>
  <p>${phone.battery}</p>
  </div>
  </div>
  </div>`;
}

///////////////////////////////////////////
// Events
addEventListener("load", () => {
  displayPhoneDetail();
  activePhone();
});

phonePageBtn.addEventListener("click", displayAllPhone);
homePageBtn.addEventListener("click", displayPhoneDetail);

// Change phone spec data
upBtn.addEventListener("click", () => rotate(-90));
downBtn.addEventListener("click", () => rotate(90));

allImages.forEach((image) => {
  image.addEventListener("click", function (e) {
    activePhone(phones.find((phone) => phone.id === e.target.id));
    displayPhoneDetail();
  });
});
