var button = document.getElementById("ChickenButton");
var cooldown = false;

button.onclick = function() {
    if (cooldown == false) {
        cooldown = true;
      const sound = new Audio("ChickenScream.mp3");
      sound.play();

      setInterval(() => {
        cooldown = false;
      },3000);
    }
}