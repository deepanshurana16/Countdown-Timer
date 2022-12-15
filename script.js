const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');
const newyears = "JANUARY 1,2023";

function countdown(){
    const newyearsdate=new Date(newyears);
    const currentdate= new Date();
    const totalseconds=(newyearsdate.getTime()-currentdate.getTime())/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;
    console.log(days,hours,minutes,seconds);

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;
}
countdown();
setInterval(countdown,1000);




