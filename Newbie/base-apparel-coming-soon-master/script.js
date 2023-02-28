let img = document.getElementById("photo");

function updateImgSrc() {
  if (window.innerWidth <= 375) {
    img.src = "./images/hero-mobile.jpg";
  }
}

window.addEventListener("resize", updateImgSrc());
