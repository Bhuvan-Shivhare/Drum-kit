var numOfClick = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfClick; i++) {
    // for touch //
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var innerHtml = this.innerHTML;

        makeSound(innerHtml);
        keyAnimation(innerHtml);

    });

    //for keypad //

    document.addEventListener("keypress", function (event) {

        makeSound(event.key);
        keyAnimation(event.key);
    });

    function makeSound(key) {

        switch (key) {

            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom0 = new Audio("sounds/snare.mp3");
                tom0.play();
                break;

            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "j":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kbass = new Audio("sounds/kick-bass.mp3");
                kbass.play();
                break;

            default: console.log(innerHtml);
                break;
        }

    }
}
function keyAnimation(currentKey) {
     
    //for adding pressed class

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressedd");

    //for removing pressedd class just for look like an animation

    setTimeout(function () {
        activeButton.classList.remove("pressedd");
    }, 100
    );
}
