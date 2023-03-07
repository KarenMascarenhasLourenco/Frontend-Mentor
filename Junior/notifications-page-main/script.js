const itemNotification = document.querySelectorAll(".notification-item");
const readAllNotifications = document.querySelector(".readAll");

readAllNotifications.addEventListener("click",() =>{
    itemNotification.forEach(item =>{
        item.classList.remove("unread-notification");
    })
})