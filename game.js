img = ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]
firstImg="";
firstElement="";
count=0;
t=60;
winCounter = 8;


function randomImg(){
	for(i = 0; i<img.length; i++){
		r = Math.floor(Math.random()*15);
		temp = img[i];
		img[i] = img[r];
		img[r] = temp;
	}
	console.log(img);
}


randomImg();
function changeImg(index, element){
	 element.setAttribute('src',img[index]);
	

	if(count == 0){
		count ++;
		firstImg = img[index];
		firstElement = element;
}
else {
	setTimeout(function(){
		if(firstImg == img[index] && firstElement != element){
		firstElement.style.visibility = "hidden";
		element.style.visibility = "hidden";
		winCounter--;
		 if (winCounter==0) {
	 	alert("Congratultions! " + player + " won in " + t + "seconds");
	 	location.reload();
	 }
		
		count = 0;
	}
	else{
		firstElement.setAttribute('src',"1.png");
		element.setAttribute('src',"1.png");
		count = 0;
		}
	}, 1000);
}
}



function startGame(){
	count=0;
	t=60;
	winCounter = 8;
	document.getElementsByTagName("button")[0].disabled = false;
	player = prompt("Player name:");
	document.getElementById("player").innerHTML = player;
	myVar = setInterval(myTimer, 1000);
}

function myTimer (){
	if(t==0){
		clearInterval(myVar);
		alert("You lost!");
	} 
	else {
		t--;
		document.getElementById("timer").innerHTML = "time:" + t;
	}
}

