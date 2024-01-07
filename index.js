function buttonPressed() {
  var nameOne = document.getElementById("firstName").value.trim();
  var nameTwo = document.getElementById("secondName").value.trim();

  if (nameOne !== "" && nameTwo !== "") {

    var randomNumber;
    if (
      nameOne.toLowerCase() === "anjei" ||
      nameTwo.toLowerCase() === "anjei" ||
      nameOne.toLowerCase() === "sophia" ||
      nameTwo.toLowerCase() === "sophia" ||
      nameOne.toLowerCase() === "wiggly" ||
      nameTwo.toLowerCase() === "wiggly"
    ) {
      randomNumber = 100;
    } else {
      randomNumber = Math.floor((Math.random() * 100) + 1);
    }

    document.querySelector("h1").innerHTML = randomNumber + "%";

    if (randomNumber <= 100 && randomNumber >= 90) {
      document.querySelector("h4").innerHTML = "Your love shines brighter than the stars!";
    }
    else if (randomNumber < 90 && randomNumber >= 70) {
      document.querySelector("h4").innerHTML = "Together, you're an unstoppable duo like Thunder and Lightning!";
    }
    else if (randomNumber < 70 && randomNumber >= 50) {
      document.querySelector("h4").innerHTML = "Your bond is blossoming like Spring after Winter!";
    }
    else if (randomNumber < 50 && randomNumber >= 30) {
      document.querySelector("h4").innerHTML = "Like Coffee and Cream, you're an interesting mix!";
    }
    else if (randomNumber < 30) {
      document.querySelector("h4").innerHTML = "Like Chalk and Cheese, you're quite the unique pair!";
    }

    // Make first letter uppercase
    nameOne = nameOne[0].toUpperCase() + nameOne.slice(1);
    nameTwo = nameTwo[0].toUpperCase() + nameTwo.slice(1);

    document.querySelector("h3").innerHTML = nameOne + " and " + nameTwo;

  }

  document.getElementById("firstName").value = "";
  document.getElementById("secondName").value = "";
}
