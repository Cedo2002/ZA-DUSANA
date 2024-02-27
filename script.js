var circle = document.getElementById("circle");
        var upBtn = document.getElementById("upBtn");
        var downBtn = document.getElementById("downBtn");

        var rotateValue = circle.style.transform;
        var rotateSum;

        upBtn.onclick = function () {
            rotateSum = rotateValue + "rotate(-90deg)";
            circle.style.transform = rotateSum;
            rotateValue = rotateSum;
        }

        downBtn.onclick = function () {
            rotateSum = rotateValue + "rotate(90deg)";
            circle.style.transform = rotateSum;
            rotateValue = rotateSum;
        }



let phone = [
    {
        img: src(images/huawei.jpg),
        name: 'Huawei Mate 60 Pro',
        camera: '50MP, Wide Laser',
        procesor: '256GB 12GB RAM',
        display: '6.82" Screen-to-body Ratio',
        battery: 'Li-Po 5000mAh, non-removable'
    },
    {
        img: src(images/samsung24.jpg),
        name: 'Samsung Galaxy S24 Ultra',
        camera: '200MP, Multi-directional PDAF',
        procesor: '256GB 12GB RAM, UFS 4.0',
        display: '6.8" Dynamic LTPO AMOLED',
        battery: 'Li-Ion 5000mAh, non-removable'
    },
    {
        img: src(images/iphone15promax.jpg),
        name: 'IPhone 15 Pro Max',
        camera: '48MP, dual pixel PDAF',
        procesor: 'S256GB 8GB RAM, NVMe',
        display: '6.7" LTPO Super Retina XDR OLED',
        battery: '4441mAh, non-removabl'
    },
    {
        img: src(images/mobile.png),
        name: 'SAMSUNG Galaxy A33',
        camera: '12MP, Wide Angle Lens',
        procesor: 'Snapdragon Octa-core 11nm',
        display: '6.5" Mini-Drop Fullscreen',
        battery: '5000mAh, 720Hrs Standby'
    }        
]

function mainMobile () {
    location.replace ('index.html');
}