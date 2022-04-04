function coupleNames() {
    let x = document.getElementById("fname").value;
    let y = document.getElementById("sname").value;
    document.getElementById("coupleNames").innerHTML = x + " & " + y;
  }

  
  function weddingDate() {
    let x = document.getElementById("date").value;
    document.getElementById("wedding-date").innerHTML = x;
  }


function weddingVenue() {
    let x = document.getElementById("venue").value;
    document.getElementById("wedding-venue").innerHTML = x;
  }
  
  function weddingAddress() {
    let x = document.getElementById("address").value;
    document.getElementById("wedding-address").innerHTML = x;
  }

  function rsvpDate() {
    let x = document.getElementById("rsvp").innerHTML = "RSVP";
    let y = document.getElementById("more-info").value;
    document.getElementById("wedding-info").innerHTML = y;
  }


  let namesSimpleFrame = `font-family: 'Sacramento', cursive; font-size: 47px; margin: 5px 0; line-height: 1;`
  let dateSimpleFrame = `font-family: 'Montserrat', sans-serif; font-weight: 1000; font-size: 25px; margin: 0; letter-spacing: .5rem;`
  let venueSimpleFrame = `font-family: 'Montserrat', sans-serif; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-top: 0;` 
  let addressSimpleFrame = `font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-size: 12px;`
  let rsvpSimpleFrame = `font-family: 'Montserrat', sans-serif; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-top: 0;`
  let infoSimpleFrame = `font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-size: 12px;`


  function simpleBG() {
    document.getElementById("intro").innerHTML = "You are invited to celebrate <br>the wedding of";
    document.getElementById("invite").style.backgroundImage = "url(./assets/simple-frame.jpg)";
    document.getElementById("intro").style = venueSimpleFrame;
    document.getElementById("coupleNames").style = namesSimpleFrame;
    document.getElementById("wedding-date").style = dateSimpleFrame;
    document.getElementById("wedding-venue").style = venueSimpleFrame;
    document.getElementById("wedding-address").style = addressSimpleFrame;
    document.getElementById("rsvp").style = rsvpSimpleFrame;
    document.getElementById("wedding-info").style = infoSimpleFrame;
 }


  let namesFloral = `font-family: 'Playfair Display', serif; font-size: 40px; margin: 5px 0; line-height: 1;`
  let dateFloral = `font-family: 'Roboto', sans-serif; font-weight: 1000; font-size: 25px; margin: 0; letter-spacing: .5rem;`
  let venueFloral = `font-family: 'Roboto', sans-serif; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-top: 0;` 
  let addressFloral = `font-family: 'Roboto', sans-serif; text-transform: uppercase; font-size: 12px;`
  let rsvpFloral = `font-family: 'Roboto', sans-serif; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-top: 0;`
  let infoFloral = `font-family: 'Roboto', sans-serif; text-transform: uppercase; font-size: 12px;`

 function floralBG() {
  document.getElementById("intro").innerHTML = "You are invited to celebrate <br>the wedding of";
  document.getElementById("invite").style.backgroundImage = "url(./assets/floral.jpg)";
  document.getElementById("intro").style = venueFloral;
  document.getElementById("coupleNames").style = namesFloral;
  document.getElementById("wedding-date").style = dateFloral;
  document.getElementById("wedding-venue").style = venueFloral;
  document.getElementById("wedding-address").style = addressFloral;
  document.getElementById("rsvp").style = rsvpFloral;
  document.getElementById("wedding-info").style = infoFloral;
}

let namesFloralFrame = `font-family: 'Lobster', cursive; font-size: 40px; margin: 5px 0; line-height: 1;`
let dateFloralFrame = `font-family: 'Bitter', serif; font-weight: 1000; font-size: 25px; margin: 0; letter-spacing: .5rem;`
let venueFloralFrame = `font-family: 'Bitter', serif; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-top: 0;` 
let addressFloralFrame = `font-family: 'Bitter', serif; text-transform: uppercase; font-size: 12px;`
let rsvpFloralFrame = `font-family: 'Bitter', serif; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-top: 0;`
let infoFloralFrame = `font-family: 'Bitter', serif; text-transform: uppercase; font-size: 12px;`

function frameBG() {
  document.getElementById("intro").innerHTML = "You are invited to celebrate <br>the wedding of";
  document.getElementById("invite").style.backgroundImage = "url(./assets/frame.jpg)";
  document.getElementById("intro").style = venueFloralFrame;
  document.getElementById("coupleNames").style = namesFloralFrame;
  document.getElementById("wedding-date").style = dateFloralFrame;
  document.getElementById("wedding-venue").style = venueFloralFrame;
  document.getElementById("wedding-address").style = addressFloralFrame;
  document.getElementById("rsvp").style = rsvpFloralFrame;
  document.getElementById("wedding-info").style = infoFloralFrame;
}


