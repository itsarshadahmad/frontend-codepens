const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
    // window.pageYOffset -> Deprecated
    // let offset = window.pageYOffset;
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
