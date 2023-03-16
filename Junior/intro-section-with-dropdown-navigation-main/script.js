const menuItems = Array.from(document.querySelectorAll(".subitem-menu")),
 menuMobile = document.querySelector(".menu-toggle"),
 navMobile = document.querySelector(".nav-mobile"),
 mq = window.matchMedia("(max-width: 375px)");
let navMobileCount=0;

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
  const subMenu = menuItem.querySelector("ul");
  subMenu.classList.toggle("active");
});
});

menuMobile.addEventListener('click', ()=>{
  menuMobile.classList.toggle("menu-open");
  navMobile.classList.toggle("open");
  if(navMobileCount % 2 === 1){
    navMobile.setAttribute("aria-hidden", false);
  }else{
    navMobile.setAttribute("aria-hidden", true);
  }
})

function handleMediaQuery(mq) {
 if (mq.matches) {
  element.setAttribute("aria-hidden", "false");
 } else {
  element.setAttribute("aria-hidden", "true");
 }
}

handleMediaQuery(mq);

mq.addEventListener("change", handleMediaQuery);