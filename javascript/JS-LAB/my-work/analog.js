const $ = (selector) =>{
    return document.querySelector(selector);
};
const $diallines = document.getElementsByClassName('diallines');
const $clock = $('.clock');
for(let i =1; i<=60; i++){
    $clock.innerHTML+="<div class='diallines'></div>";
    $diallines[i].Style.transform = `rotate(${6*i}deg)`;
}
function update(){
    const weekday= ["sunday", 
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thrusday",
                    "friday",
                    "saturday"];
  const d= new Date(); 
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const date = d.getDate(); 
  const month =d.getMonth  ();
  const year  = d.getFullYear();

  const hDeg = h* 30 +m * (360/720);
  const mDeg = m * 6 +s *(360/3600);
  const sDeg = s*6;

  const $hour = $('.hourhand');
  const $min = $('.minutehand');
  const $sec = $('.secondhand');
  const $date = $('.date');
  const $day = $('.day');
  const day =weekday [d.getDay()];
  if(month < 9){
    month = "0" +month;
  }
  $hour.Style.transform = `rotate(${hDeg}deg)`;
  $min.Style.transform = `rotate(${mDeg})`;
  $sec.Style.transform = `rotat(${sDeg})`;
  $date.innerHTML = `${year}/${month}/${date}`;
  $day.innerHTML= day;
}
setInterval(update,1000);
