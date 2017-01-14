//https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJaB-iu1KRS8%2Fhqdefault.jpg&f=1
	button = document.getElementById("mainbutton");
	button.addEventListener("click", function paint() {
		
			// TRY ME
	  	function loadImages(source, callback) {

	  		img = new Image();
	  		img.onload = function(){
	  		callback(img);
	  		};
	  		img.src = source;
	  	}
		var up = document.getElementById("up").value;								//Above Text
		var down = document.getElementById("down").value;							//Below Text
		var canvas = document.getElementById("myCanvas");				//Load the canvas object
		var ctx = canvas.getContext("2d");							//Difine context to draw on canvas
		source = document.getElementById("theURL").value;
		
		loadImages(source, function(img) {
			canvas.width = img.naturalWidth;							//Set Canvas dimensions 
			canvas.height = img.naturalHeight;
			ctx.font = "45pt Arial";					//Set fonts HAVE TO FIX THAT TO BE RESPONSIVE ACORDING TO THE IMAGE WIDTH
			ctx.textAlign = "center"; 				//Align to center always
			ctx.drawImage(img,0,0);		//Draw the imageor fonts
			ctx.fillStyle = "#FFF";
			ctx.strokeStyle = 'black';
			ctx.fillText(up,img.naturalWidth/2,50); //fix the dimentions to justify upper text!!		//Write Above text
			ctx.strokeText(up,img.naturalWidth/2,50); //fix the dimentions to justify upper text!!		//Write Above text
			ctx.fillText(down,img.naturalWidth/2,img.naturalHeight-40); //fix the dimentions to justify 	//Write Below text
			ctx.strokeText(down,img.naturalWidth/2,img.naturalHeight-40); //fix the dimentions to justify 	//Write Below text
			});
		});
