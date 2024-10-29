function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "inline";
  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);
}
