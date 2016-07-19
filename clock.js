var colors = ['green', 'orange', 'yellow', 'red'];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 5000);



function startTime () {
	var today = new Date ()
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
  
	h = correctTime (h);
	h = checkTime (h); //option 2
	m = checkTime(m);
	s = checkTime(s);
    colorTime(s);
    colorFont(m);
	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
	var t =setTimeout(startTime, 500);

}

function isAMorPM(i) {
	if (i > 12) {
		return "PM";
	} else {
		return "AM";
	}

}
function colorFont(i) {
	if (i === 35) {
		$("#txt").css("fontSize", "35px");
		 } else {
			$("#txt").css("fontSize", "60px");
		}

	}


function checkTime(i) {

	if (i < 10) {
		i = "0" + i
	}
	return i;
}

function colorTime(i) {
	if (i % 2 === 0) {
		$("#txt").css("color", "red")
	} else {
		$("#txt").css("color", "blue")
	}
}
function correctTime (i) {
	if (i > 12) {
		i = i - 12;
	}
	return i;
}



