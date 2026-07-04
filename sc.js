/*============================
Menu Icon
============================*/

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };
}

/*============================
Active Navbar Link + Sticky Header
============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`nav a[href="#${id}"]`);

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    // Sticky Header
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 100);
    }

    // Close Mobile Menu
    if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    }

});
