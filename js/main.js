var main = function () {
	"use strict";
	let main = document.querySelector('main');
	let bodyHeight = document.body.clientHeight;
	let winHEIGHT = window.innerHeight;
	
	document.addEventListener("scroll", (e)=>{
		let third = (bodyHeight - winHEIGHT) / 3;
		if (window.scrollY < third) {
			main.style.backgroundColor = "red";
		} else if (window.scrollY < 2*third) {
			main.style.backgroundColor = "yellow";
		} else {
			main.style.backgroundColor = "green";
		}
		console.log(window.scrollY);
		console.log(winHEIGHT);
	});
	
	
};
$(document).ready(main);
