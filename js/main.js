var main = function () {
	"use strict";
	let main = document.querySelector('main');
	let bodyHeight = document.body.clientHeight;
	let winHEIGHT = window.innerHeight;
	
	document.addEventListener("scroll", (e)=>{
		let delta = (bodyHeight + winHEIGHT) / 3 - window.scrollY;
		if (delta>2000) {
			main.style.backgroundColor = "red";
		} else if (delta>1000) {
			main.style.backgroundColor = "yellow";
		} else {
			main.style.backgroundColor = "green";
		}
		console.log(window.scrollY);
	});
	
	
};
$(document).ready(main);
