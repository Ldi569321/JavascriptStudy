const accBtn = document.querySelectorAll("button");
const text = document.querySelectorAll(".panelOff");

accBtn.forEach((accroBtn, i) => {
    accroBtn.addEventListener("click", () => {
        text[i].classList.toggle(`panelOn`);
    })
})