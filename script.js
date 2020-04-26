function changeColor() {
document.body.style.backgroundColor = "black";
document.getElementById('dark-mode').style.display = "none";
document.getElementById('light-mode').style.display = "inline-block";
}
function changeBack() {
document.body.style.backgroundColor = "indianred";

var darkModeButton = document.getElementById('dark-mode');
darkModeButton.style.display = "inline-block";

var lightModeButton = document.getElementById('light-mode');
lightModeButton.style.display = "none";
}
