$(document).ready( ()=>{
    function showTime(){
        let now = new Date();

        let hours = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        let session = "AM"

        if(hours == 0){
            hours = 12
        }
        if(hours >= 12){
            session = "PM";
        }
        if(hours > 12){
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        $('#hours').text(hours);
        $('#min').text(minute);
        $('#sec').text(second);
        $('#period').text(session);

        setTimeout(showTime, 1000)
    }
    showTime();
})