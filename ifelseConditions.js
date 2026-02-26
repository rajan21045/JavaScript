const demo = document.getElementById("demo");
const hour = new Date().getHours();
let message = "";

if (hour < 12) {
    message = " Good Morning!";
} 
else if (hour < 18) {
    message = " Good Afternoon!";
} 
else if (hour < 21) {
    message = " Good Evening!";
} 
else {
    message = " Good Night!";
}

demo.innerHTML = message;