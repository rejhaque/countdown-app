const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date (2022, 9, 5, 4, 30, 30);
const futureDate = new Date(tempYear, tempMonth, tempDay+10, 5, 11, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in MS
const futureTime = futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60* 1000;
  const oneMinute = 60*1000;

  let days = t/oneDay;
  days = Math.floor(days);
  let hours = (t % oneDay) / oneHour;
  console.log(hours);
  hours = Math.floor(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days,hours,minutes,seconds];

  function format (item){
    if(item < 10){
      return item = `0${item}`
    }else{
      return item;
    }
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ="expired">sorry giveaway is expired</h4>`;
  }
}

// countdown timer
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();