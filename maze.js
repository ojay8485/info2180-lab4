window.onload = function(){
	var status = document.getElementById("status");
	
	var boundary1 = document.getElementById("boundary1");
	boundary1.onmouseover = function(){
			boundary1.classList.add("youlose");
	}
	
	var allbounds = document.querySelectorAll(".boundary")

	allbounds.forEach(function(bound){
		bound.onmouseover = function(){
			status.innerHTML = "You lose";
			bound.classList.add("youlose");
		}
	});
	
	var play= false;
	var start = document.getElementById("start");
	
	start.onclick = function(){
		play = true;
		allbounds.forEach(function(bound){
				bound.classList.remove("youlose");
		});
		status.innerHTML = "Click your mouse on the 'S' to begin";
	};
	
	var end = document.getElementById("end");

	end.onmouseover = function(){
		if (play === true){
			flag = false;
			allbounds.forEach(function(b){
					if (b.classList.contains("youlose")){
						flag = true;
					}
				});
			if(flag === false){
				alert("You win");
				status.innerHTML = "You win";
			}
		}
	}
	
	document.getElementById("maze").onmouseleave = function(){
			play = false;
		}
};