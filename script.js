var hour24Format = false;

(function() {
    document.getElementById("toggle-btn").addEventListener("click", function(){
        hour24Format = !hour24Format;
        const sessionStrDiv = document.getElementsByClassName("session")[0];
        sessionStrDiv.style.display = hour24Format? 'none' : 'block';
        document.getElementById("toggle-btn").innerText = hour24Format? "12-hr": "24-hr";
        setDate();
    });

    setDate();
    setInterval(setDate, 1000);
 })();

function setDate(){
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateStr = monthNames[today.getMonth()]+ " "+ today.getDate()+", " + today.getFullYear();
    const dateStrDiv = document.getElementById("date");
    dateStrDiv.innerText = dateStr;

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const weekDayStrDiv = document.getElementById("day");
    weekDayStrDiv.innerText = days[today.getDay()];

    const hourStrDiv = document.getElementById("hours");
    const minuteStrDiv = document.getElementById("minutes");
    const secondStrDiv = document.getElementById("seconds");
    const sessionStrDiv = document.getElementById("session");

    let hours = today.getHours();
    let session = "AM";
    if(!hour24Format){
        if (hours > 12) {
            hours -= 12;
            session = "PM";
        } else if (hours === 0) {
            hours = 12;
        } else if(hours===12) {
            session = "PM";
        }
    }
    
    hourStrDiv.innerText = hours;
    minuteStrDiv.innerText = today.getMinutes();
    secondStrDiv.innerText = today.getSeconds();
    sessionStrDiv.innerText = session;


 }