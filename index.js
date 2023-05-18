var today = new Date();
var time = today.getHours();

time = 18

if (time < 12) {
    document.getElementById("greetingcard").innerHTML = "Good Morning"
} else if (time >= 12 && time <= 17) {
    document.getElementById("greetingcard").innerHTML = "Good Afternoon"
} else {
    document.getElementById("greetingcard").innerHTML = "Good Evening"
}

console.log(time);