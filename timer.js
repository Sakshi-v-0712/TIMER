alert("Hey, This is Sakshi. Nice to have you visit my page ");

const startingMinutes = 10;
let time = startingMinutes * 60; //600 seconds

const timerEl = document.getElementById("Timer"); //id name from HTML <p>

setInterval

setInterval(updateTimer, 1000);

function updateTimer() {

    //calculating minutes and seconds remaining : 
    const min = Math.floor(time / 60);

    //( seconds left ) /60 = Minutes left
    //Math.floor to recieve lowers no. without the decimals

    let sec = time % 60;
    //remaining seconds after the minutes

    sec = sec < 10 ? "0" + sec : sec;
    //refresh page to reset timer to 10:00

    //adding to screen 
    timerEl.innerHTML = `${min} :  ${sec}`;

    time--;
    //decreasing time

    time = time < 0 ? 0 : time;
    //to avoid getting negative numbers
}


function endCount() {
    timeH.innerHTML = "Time Out";
}