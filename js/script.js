window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
document.body.style.backgroundColor = `rgb(${scrollPosition % 204}, ${scrollPosition % 283}, 197)`;
});

document.addEventListener("mousemove", function(event) {
   let RuPaul = document.getElementById("followRu");
   RuPaul.style.left = event.pageX + "px";
   RuPaul.style.top = event.pageY + "px";
});

let infoBox = document.getElementById("YoungRu");
let hiddenMessage = document.getElementById("hiddenMessage");
function showMessage() {
    hiddenMessage.style.display = "block";
}
function hideMessage() {
    hiddenMessage.style.display = "none";
}
infoBox.addEventListener("mousemove", showMessage);
infoBox.addEventListener("mouseleave", hideMessage);

let infoBox2 = document.getElementById("entertainmentInfo");
let hiddenMessage2 = document.getElementById("hiddenMessage2");
function showMessage2() {
    hiddenMessage2.style.display = "block";
}
function hideMessage2() {
    hiddenMessage2.style.display = "none";
}
infoBox2.addEventListener("click", showMessage2);
infoBox2.addEventListener("mouseleave", hideMessage2);