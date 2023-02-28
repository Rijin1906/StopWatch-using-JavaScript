// 1. first declare variables/ everything
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;


// To check whether the timer is worlking or not 
let timer = false;



//   a. start = start function.
function start() {
    document.getElementById("count").style.color = "rgb(69, 163, 69)";
    document.getElementById("sec").style.color = "rgb(69, 163, 69)";
    document.getElementById("min").style.color = "rgb(69, 163, 69)";
    document.getElementById("hr").style.color = "rgb(69, 163, 69)";

    timer = true;
    stopwatch();
    // console.log("Started");
}

//   b. stop = stop function.
function stop() {
    document.getElementById("count").style.color = "#e74c3c";
    document.getElementById("sec").style.color = "#e74c3c";
    document.getElementById("min").style.color = "#e74c3c";
    document.getElementById("hr").style.color = "#e74c3c";

    timer = false;

    // console.log("Stopped");
}
//   c. reset = reset function. 
function reset() {
    timer = false;
    count = 0;
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("count").style.color = "#3498db";

    document.getElementById("sec").innerHTML = "00";
    document.getElementById("sec").style.color = "#3498db";

    document.getElementById("min").innerHTML = "00";
    document.getElementById("min").style.color = "#3498db";

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("hr").style.color = "#3498db";
    // console.log("Paused")
}
// d. Actual stopwatch Function
function stopwatch() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            count = 0;
            sec = sec + 1;
            if (sec == 60) {
                count = 0;
                sec = 0;
                min = min + 1;

                if (min == 60) {
                    count = 0;
                    sec = 0;
                    min = 0;
                    hr = hr + 1;

                }
            }
        }
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;

        setTimeout("stopwatch()", 10);
    }
    else {

    }
}