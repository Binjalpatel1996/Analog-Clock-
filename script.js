const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let Sec = date.getSeconds();

let hrP = (hr*360/12)+(min*(360/60)/12);
let minP = (min*360/60)+(Sec*(360/60)/60);
let secP = Sec*360/60;

function runTheClock(){

    hrP = hrP+(3/360); /* 360/12*3600 */
    minP = minP+(6/60);/* 1/60 * 6 */
    secP = secP+6; /* 360/60 */

    HOURHAND.style.transform = "rotate(" + hrP + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minP + "deg)";
    SECONDHAND.style.transform = "rotate(" + secP + "deg)";

}
 
var interval = setInterval(runTheClock, 1000);