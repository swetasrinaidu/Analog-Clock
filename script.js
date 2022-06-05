setInterval(setClock,1000)

const hourHand=document.querySelector(".hours_hand")
const minutesHand=document.querySelector(".minutes_hand")
const secondsHand=document.querySelector(".seconds_hand")

function setClock(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes= date.getMinutes();

    const hours=date.getHours()<13?date.getHours():date.getHours()-12;
    console.log(seconds,minutes,hours)
    secondsHand.style.transform=`rotate(${seconds*6}deg)`;
    minutesHand.style.transform=`rotate(${minutes*6}deg)`;
    hourHand.style.transform=`rotate(${(hours*30)}deg)`;
}
