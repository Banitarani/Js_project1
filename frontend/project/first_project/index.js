function setTime() {
  let timer;
  timer = parseInt(document.getElementById("time").value);
  document.getElementById("Time").innerText = "Count-Down : " + timer;
  const count = setInterval(() => {
    timer--;
    document.getElementById("Time").innerText = " Count-Down : " + timer;
    if (timer == 0) {
      clearInterval(count);
    }
  }, 1000);
}
