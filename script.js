let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        var ico = this.firstElementChild;
        if (panel.style.display === "flex") {
            panel.style.display = "none"
            ico.style.transform = "rotate(-90deg)";
        } else {
            panel.style.display = "flex"
            ico.style.transform = "rotate(0deg)";
        }
      });
}
function openHeader(){
    let header = document.getElementById("header__menu--vertical--ele")
    if (header.style.display === "flex") {
        header.style.display = "none"
    } else {
        header.style.display = "flex"
    }
}