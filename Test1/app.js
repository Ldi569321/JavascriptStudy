const menuBtn = document.querySelectorAll("button");
const About = document.querySelector("#About");
const Products = document.querySelector("#Products");
const Technology = document.querySelector("#Technology");
const Downloads = document.querySelector("#Downloads");
const tab = document.querySelectorAll(".tab");
tabArray = [About, Products, Technology, Downloads];

function openMenu(target, seltab, color) {
    target.style.display = `block`
    seltab.style.background = color;
    for (i = 0; i < tabArray.length; i++) {
        if (tabArray[i] != target) {
            tabArray[i].style.display = `none`;
            tab[i].style.background = `#555`;
        }
    }
}