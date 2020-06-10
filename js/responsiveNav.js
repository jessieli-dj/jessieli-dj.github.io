function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "myNav") {
    x.className += " responsive";
  } else {
    x.className = "myNav";
  }
}
