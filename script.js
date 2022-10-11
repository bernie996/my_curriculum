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

window.onscroll = function() {scrollFunction()};
let logo_header = document.getElementById('logo__header')
let logo__header__width = document.getElementById('logo__header').style.width

let header = document.getElementById('header')
let header__padding = header.style.padding

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    logo_header.style.width = "30%"
    header.style.padding = "0.5rem 0rem 0.25rem"
  } else {
    logo_header.style.width = logo__header__width
    header.style.padding = header__padding
  }
}