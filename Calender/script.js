setInterval(function() {
    location.reload();
}, 1000);

let currentDate = new Date;
console.log(currentDate);

function get12HourTime() {

    // Get hours, minutes, and seconds
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    

    // Convert the hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Construct the time string
    var timeString = hours + ':' + minutes + ':' + seconds;

    return timeString;
}
// Determine AM or PM



let time = document.getElementById("time");
let meridian = document.getElementById("meridian");
let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTUBER", "NOVEMBER", "DECEMBER"]


time.innerHTML = get12HourTime();
meridian.innerHTML = currentDate.getHours() >= 12 ? 'PM' : 'AM';
date.innerText =  currentDate.getDate();
day.innerHTML = days[currentDate.getDay()];
month.innerHTML = months[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear();



