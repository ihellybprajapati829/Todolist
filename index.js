function List() 
{
    var lnames = document.createElement("li");
    var inputValue = document.getElementById("todoip").value;
    var t = document.createTextNode(inputValue);
    lnames.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        document.getElementById("List").appendChild(lnames);
    }
    document.getElementById("todoip").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    lnames.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
setInterval(showTime,1000);
function showTime()
{
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes(); 
    var sec = time.getSeconds(); 
    var i;
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
  
    function checkTime(i) 
    {
        if (i < 10) {i = "0" + i};
        return i;
    }
}