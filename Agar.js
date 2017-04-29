//parallax effect
function parallax() {
	var $slider = 
	document.getElementById("slider");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;

	var coords = '0% ' + yPos + 'px';

	$slider.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function() {
	parallax();
});

//rotate dropdown image 
function Rotate() {
	var img = document.getElementById('arrowImg');

	if (img.className === 'normal') {
		img.className = 'rotate';
	} else if (img.className === 'rotate') {
		img.className = 'normal';
	}
}

//show content button 
function showAbout() {
	var x = document.getElementById('aboutContent');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

//carousel 
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       	x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}