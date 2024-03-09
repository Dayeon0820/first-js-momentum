const images = ["0.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

const chosenImage= images[Math.floor(Math.random()*images.length)];

const bdImage= document.createElement("img");
bdImage.src=`img/${chosenImage}`
bdImage.id="background-image"

document.body.appendChild(bdImage);
