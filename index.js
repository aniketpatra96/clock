window.onload = function () {
    gettime();
    let today = new Date();
    let year = today.getFullYear();
    document.getElementById('year').innerHTML = year;
};
function gettime() {
    var mydate = new Date();
    var h = mydate.getHours();
    var m = mydate.getMinutes();
    var s = mydate.getSeconds();
    var ms = mydate.getMilliseconds();
    h = check(h);
    m = check(m);
    s = check(s);
    if(h>12){
        h=h-12;
        document.getElementById("time").innerHTML="PM";
    }else{
        document.getElementById("time").innerHTML="AM";
    }
    document.getElementById("text").innerHTML = h + ":" + m + ":" + s;
    //console.log("Current Time : " + h + ":" + m + ":" + s);
    setTimeout(function () {
        gettime();
    }, 1000);
    function check(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}


setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

