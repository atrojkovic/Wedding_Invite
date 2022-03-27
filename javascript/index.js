function coupleNames() {
    var x = document.getElementById("fname").value;
    var y = document.getElementById("sname").value;
    document.getElementById("coupleNames").innerHTML = x + " & " + y;
  }

  function weddingDate() {
    var x = document.getElementById("date").value;
    document.getElementById("wedding-date").innerHTML = x;
  }

  function weddingLocation() {
    var x = document.getElementById("location").value;
    document.getElementById("wedding-location").innerHTML = x;
  }

  function rsvpDate() {
    var x = document.getElementById("more-info").value;
    document.getElementById("wedding-info").innerHTML = x;
  }

  function simpleBG() {
    document.getElementById("invite").style.backgroundImage = "url(./assets/simple.jpg)";
 }

 function floralBG() {
  document.getElementById("invite").style.backgroundImage = "url(./assets/floral.jpg)";
}

function frameBG() {
  document.getElementById("invite").style.backgroundImage = "url(./assets/frame.jpg)";
}


