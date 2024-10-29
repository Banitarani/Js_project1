
function setBlink(){
      const text = document.getElementById("blink");

      setInterval(() => {

        text.style.visibility = text.style.visibility == "hidden" ? "visible" : "hidden";

      }, 1000);
}
setBlink();