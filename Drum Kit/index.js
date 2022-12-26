var size = document.querySelectorAll(".drum").length;

for (var i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var innerhtml = this.innerHTML;
    makesound(innerhtml)
    buttonanimation(innerhtml)
  });
  
  document.querySelectorAll(".drum")[i].addEventListener("keypress", function (e) {
    makesound(e.key)
    buttonanimation(e.key)
    
  });

}

function makesound(key){
  switch (key) {
    case "w":
      var Sound = new Audio("sounds/crash.mp3");
      Sound.play();
      break;

    case "a":
      var Sound = new Audio("sounds/kick-bass.mp3");
      Sound.play();
      break;

    case "s":
      var Sound = new Audio("sounds/snare.mp3");
      Sound.play();
      break;

    case "d":
      var Sound = new Audio("sounds/tom-1.mp3");
      Sound.play();
      break;

    case "j":
      var Sound = new Audio("sounds/tom-2.mp3");
      Sound.play();
      break;

    case "k":
      var Sound = new Audio("sounds/tom-3.mp3");
      Sound.play();
      break;

    case "l":
      var Sound = new Audio("sounds/tom-4.mp3");
      Sound.play();
      break;

    default:
      break;
  }
}

function buttonanimation(currentkey){
  var animation = document.querySelector("."+currentkey)
  animation.classList.add("pressed")

  setTimeout(function(){
    animation.classList.remove("pressed")
  },100)
}
