

var divSkills = document.getElementById("skillsid");
var divRed = document.getElementById("redl");
var wrapp = document.getElementById("wrapid");
let isInited = false ;
let percentage = document.getElementsByClassName("line-percentage");
let a = percentage[0].innerText ;
let numPercentageA =50;
let b = percentage[1].innerText ;
let numPercentageB =80;
let c =  percentage[2].innerText ;
let numPercentageC =70;
let d =  percentage[3].innerText ;
let numPercentageD =30;


wrapp.addEventListener('mouseover', function(){
		if (!isInited) {
			moveh();
			movec();
			movej();
			moves();
		}

		isInited = true;
})


function moves() {
  var elem = document.getElementById("redl4");  
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= numPercentageA) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      a = width * 1  + '%';
      percentage[0].innerText = a ;
    }
  }
}




function moveh() {
  var elem = document.getElementById("redl");  
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= numPercentageB) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      b = width * 1  + '%';
      percentage[1].innerText = b ;
    }
  }
}



function movec() {
  var elem = document.getElementById("redl2");  
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= numPercentageC) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      c = width * 1  + '%';
      percentage[2].innerText = c ;
    }
  }
}

function movej() {
  var elem = document.getElementById("redl3");  
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= numPercentageD) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      d = width * 1  + '%';
      percentage[3].innerText = b ;
    }
  }
}


	let hamb = document.getElementById('hamburgerid').addEventListener("click", showNavb);
	let navb = document.querySelector('.nav-bar');
	let navl = document.querySelector('.nav-links');
	let active = false;



	function showNavb(){
		if(!active){
			navb.style.maxHeight = '200px';
			active = true ;
			navl.style.display='block'; 
		}
		else{
				navb.style.height = 'auto';
				active = false;
				navl.style.display='none'; 		
			}

	}


		function showNavl(){
		let w = window.innerWidth;
		if (w>700) {
			navl.style.display='block'; 
		}
		else{
			navl.style.display='none'; 
		}
	}


window.addEventListener('resize', showNavl);