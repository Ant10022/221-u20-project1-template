function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
window.addEventListener("keypress", checkKeyPress);
document.getElementById("fade_text").addEventListener("click", () => goToLocation('/feed'));