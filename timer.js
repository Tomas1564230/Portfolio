function showTime() {
    var getTime = new Date();
    var hrs = getTime.getHours();
    var min = getTime.getMinutes();
    var sec = getTime.getSeconds();

    document.getElementById("hours").textContent = hrs + " " + ":"
    document.getElementById("minutes").textContent = min + " " + ":"
    document.getElementById("seconds").textContent = sec

}
setInterval(showTime, 1000)

