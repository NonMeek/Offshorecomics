var Strips = ["images/S202.png","images/S201.png","images/S200.png","images/S199.png","images/S198.png","images/S197.png","images/S196.png","images/S195.png","images/S194.png","images/S193.png","images/S192.png","images/S191.png","images/S190.png","images/S189.png","images/S188.png","images/S187.png","images/S186.png","images/S185.png","images/S184.png","images/S183.png","images/S182.png","images/S181.png","images/S180.png","images/S179.png","images/S178.png","images/S177.png","images/S176.png","images/S175.png","images/S174.png","images/S173.png","images/S172.png","images/S171.png","images/S170.png","images/S169.png","images/S168.png","images/S167.png","images/S166.png","images/S165.png","images/S164.png","images/S163.png","images/S162.png","images/S161.png","images/S160.png","images/S159.png","images/S158.png","images/S157.png","images/S156.png","images/S155.png","images/S154.png","images/S153.png","images/S152.png","images/S151.png","images/S150.png","images/S149.png","images/S148.png","images/S147.png","images/S146.png","images/S145.png","images/S144.png","images/S143.png","images/S142.png","images/S141.png","images/S140.png","images/S139.png","images/S138.png","images/S137.png","images/S136.png","images/S135.png","images/S134.png","images/S133.png","images/S132.png","images/S131.png","images/S130.png","images/S129.png","images/S128.png","images/S127.png","images/S126.png","images/S125.png","images/S124.png","images/S123.png","images/S122.png","images/S121.png","images/S120.png","images/S119.png","images/S118.png","images/S117.png","images/S116.png","images/S115.png","images/S114.png","images/S113.png","images/S112.png","images/S111.png","images/S110.png","images/S109.png","images/S108.png","images/S107.png","images/S106.png","images/S105.png","images/S104.png","images/S103.png","images/S102.png","images/S101.png","images/S100.png","images/S99.png","images/S98.png","images/S97.png","images/S96.png","images/S95.png","images/S94.png","images/S93.png","images/S92.png","images/S91.png","images/S90.png","images/S89.png","images/S88.png","images/S87.png","images/S86.png","images/S85.png","images/S84.png","images/S83.png","images/S82.png","images/S81.png","images/S80.png","images/S79.png","images/S78.png","images/S77.png","images/S76.png","images/S75.png","images/S74.png","images/S73.png","images/S72.png","images/S71.png","images/S70.png","images/S69.png","images/S68.png","images/S67.png","images/S66.png","images/S65.png","images/S64.png","images/S63.png","images/S62.png","images/S61.png","images/S60.png","images/S59.png","images/S58.png","images/S57.png","images/S56.png","images/S55.png","images/S54.png","images/S53.png","images/S52.png","images/S51.png","images/S50.png","images/S49.png","images/S48.png","images/S47.png","images/S46.png","images/S45.png","images/S44.png","images/S43.png","images/S42.png","images/S41.png","images/S40.png","images/S39.png","images/S38.png","images/S37.png","images/S36.png","images/S35.png","images/S34.png","images/S33.png","images/S32.png","images/S31.png","images/S30.png","images/S29.png","images/S28.png","images/S27.png","images/S26.png","images/S25.png","images/S24.png","images/S23.png","images/S22.png","images/S21.png","images/S20.png","images/S19.png","images/S18.png","images/S17.png","images/S16.png","images/S15.png","images/S14.png","images/S13.png","images/S12.png","images/S11.png","images/S10.png","images/S9.png","images/S8.png","images/S7.png","images/S6.png","images/S5.png","images/S4.png","images/S3.png","images/S2.png","images/S1.png"];

var Current = 0;
var myStrip = null;

function init(){
	myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Prev(){
	if(Current == 0)
		Current = Strips.length - 1;
	else
		Current--;
	
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Next(){
	if(Current == Strips.length - 1)
		Current = 0
	else
		Current++;
	
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Rand(){
	var myRandomStrip = Strips[Math.floor(Math.random() * Strips.length)];
	document.getElementById('Strip').setAttribute('src', myRandomStrip);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function Frst(){
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[0]);
}

function Last(){
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Strips.length - 1]);
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

/*$.get("localhost/images", function(data, status){
	Strip = data;
});*/