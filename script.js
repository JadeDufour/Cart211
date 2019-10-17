var buttontop = 0;

function frame() {
	buttontop = buttontop+1;
	var thebutton = document.querySelector('.firstbox');
	thebutton.style.top = buttontop + 'px';
	
	if (buttontop >= 500) {
		clearInterval(clock);
	}
}

var clock = setInterval(frame, 10);