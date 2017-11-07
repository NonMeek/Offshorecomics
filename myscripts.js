var imageArray = ["images/Strip1.jpg", "images/Strip2.PNG", "images/Strip3.PNG", "images/Strip4.PNG"];
			var imageIndex = 1;
		
			function changeImage(){
				var myImage = document.getElementById('mainImage');
				myImage.setAttribute("src", imageArray[imageIndex]);
				imageIndex++;
				if (imageIndex > 3 ) {imageIndex = 0};
			}
