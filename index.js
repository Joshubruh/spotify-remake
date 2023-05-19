var today = new Date();
var time = today.getHours();
let trackName = document.getElementById('track-name');'

if (time < 12) {
    document.getElementById("greetingcard").innerHTML = "Good Morning"
} else if (time >= 12 && time <= 17) {
    document.getElementById("greetingcard").innerHTML = "Good Afternoon"
} else {
    document.getElementById("greetingcard").innerHTML = "Good Evening"
}
