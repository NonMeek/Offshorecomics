var images = ["images/Strip1:jpg", "images/Strip2.PNG", "images/Strip3.PNG", "images/Strip4.PNG"];
var imageIndex = 1;

function changePlus(){
	var myImage = document.getElementById("mainImage");
	myImage.setAttribute("src", images[imageIndex]);
	imageIndex++;
	if (imageIndex > images.length - 1) {imageIndex = 1};
}