var Strips = ["images/S241.jpg","images/S240.jpg","images/S239.jpg","images/S238.jpg","images/S237.jpg","images/S236.jpg","images/S235.jpg","images/S234.jpg","images/S233.jpg","images/S232.jpg","images/S231.jpg","images/S230.jpg","images/S229.jpg","images/S228.jpg","images/S227.jpg","images/S226.jpg","images/S225.jpg","images/S224.jpg","images/S223.jpg","images/S222.jpg","images/S221.jpg","images/S220.jpg","images/S219.jpg","images/S218.jpg","images/S217.jpg","images/S216.jpg","images/S215.jpg","images/S214.jpg","images/S213.jpg","images/S212.jpg","images/S211.jpg","images/S210.jpg","images/S209.jpg","images/S208.jpg","images/S207.jpg","images/S206.jpg","images/S205.jpg","images/S204.jpg","images/S203.jpg","images/S202.jpg","images/S201.jpg","images/S200.jpg","images/S199.jpg","images/S198.jpg","images/S197.jpg","images/S196.jpg","images/S195.jpg","images/S194.jpg","images/S193.jpg","images/S192.jpg","images/S191.jpg","images/S190.jpg","images/S189.jpg","images/S188.jpg","images/S187.jpg","images/S186.jpg","images/S185.jpg","images/S184.jpg","images/S183.jpg","images/S182.jpg","images/S181.jpg","images/S180.jpg","images/S179.jpg","images/S178.jpg","images/S177.jpg","images/S176.jpg","images/S175.jpg","images/S174.jpg","images/S173.jpg","images/S172.jpg","images/S171.jpg","images/S170.jpg","images/S169.jpg","images/S168.jpg","images/S167.jpg","images/S166.jpg","images/S165.jpg","images/S164.jpg","images/S163.jpg","images/S162.jpg","images/S161.jpg","images/S160.jpg","images/S159.jpg","images/S158.jpg","images/S157.jpg","images/S156.jpg","images/S155.jpg","images/S154.jpg","images/S153.jpg","images/S152.jpg","images/S151.jpg","images/S150.jpg","images/S149.jpg","images/S148.jpg","images/S147.jpg","images/S146.jpg","images/S145.jpg","images/S144.jpg","images/S143.jpg","images/S142.jpg","images/S141.jpg","images/S140.jpg","images/S139.jpg","images/S138.jpg","images/S137.jpg","images/S136.jpg","images/S135.jpg","images/S134.jpg","images/S133.jpg","images/S132.jpg","images/S131.jpg","images/S130.jpg","images/S129.jpg","images/S128.jpg","images/S127.jpg","images/S126.jpg","images/S125.jpg","images/S124.jpg","images/S123.jpg","images/S122.jpg","images/S121.jpg","images/S120.jpg","images/S119.jpg","images/S118.jpg","images/S117.jpg","images/S116.jpg","images/S115.jpg","images/S114.jpg","images/S113.jpg","images/S112.jpg","images/S111.jpg","images/S110.jpg","images/S109.jpg","images/S108.jpg","images/S107.jpg","images/S106.jpg","images/S105.jpg","images/S104.jpg","images/S103.jpg","images/S102.jpg","images/S101.jpg","images/S100.jpg","images/S99.jpg","images/S98.jpg","images/S97.jpg","images/S96.jpg","images/S95.jpg","images/S94.jpg","images/S93.jpg","images/S92.jpg","images/S91.jpg","images/S90.jpg","images/S89.jpg","images/S88.jpg","images/S87.jpg","images/S86.jpg","images/S85.jpg","images/S84.jpg","images/S83.jpg","images/S82.jpg","images/S81.jpg","images/S80.jpg","images/S79.jpg","images/S78.jpg","images/S77.jpg","images/S76.jpg","images/S75.jpg","images/S74.jpg","images/S73.jpg","images/S72.jpg","images/S71.jpg","images/S70.jpg","images/S69.jpg","images/S68.jpg","images/S67.jpg","images/S66.jpg","images/S65.jpg","images/S64.jpg","images/S63.jpg","images/S62.jpg","images/S61.jpg","images/S60.jpg","images/S59.jpg","images/S58.jpg","images/S57.jpg","images/S56.jpg","images/S55.jpg","images/S54.jpg","images/S53.jpg","images/S52.jpg","images/S51.jpg","images/S50.jpg","images/S49.jpg","images/S48.jpg","images/S47.jpg","images/S46.jpg","images/S45.jpg","images/S44.jpg","images/S43.jpg","images/S42.jpg","images/S41.jpg","images/S40.jpg","images/S39.jpg","images/S38.jpg","images/S37.jpg","images/S36.jpg","images/S35.jpg","images/S34.jpg","images/S33.jpg","images/S32.jpg","images/S31.jpg","images/S30.jpg","images/S29.jpg","images/S28.jpg","images/S27.jpg","images/S26.jpg","images/S25.jpg","images/S24.jpg","images/S23.jpg","images/S22.jpg","images/S21.jpg","images/S20.jpg","images/S19.jpg","images/S18.jpg","images/S17.jpg","images/S16.jpg","images/S15.jpg","images/S14.jpg","images/S13.jpg","images/S12.jpg","images/S11.jpg","images/S10.jpg","images/S9.jpg","images/S8.jpg","images/S7.jpg","images/S6.jpg","images/S5.jpg","images/S4.jpg","images/S3.jpg","images/S2.jpg","images/S1.jpg"];

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