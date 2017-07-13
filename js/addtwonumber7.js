
var image=['a.jpg','d.jpg','aa.jpg','n.jpg']
var name1=["Avneet","Deepak","Anil","Nilesh"]
var deg=["Trainer","UI Desinger","UI Developer","Html "]

var concat1='';

function callli(){

for (var i=0;i<image.length;i++)

{
	
	concat1=concat1 + '<li><div class="firstbox"><div class="firstbox_left"><img src="images/' + image[i] + '"></div><div class="firstbox_right"><h1>'+name1[i]+'</h1><p>'+deg[i]+'</p></div><div class="clear"></div></div></li>';

}

document.getElementById("myId").innerHTML="<ul>"+concat1+"</ul>";


}

function deleteme() {
			
		image.pop()
		name1.pop()
		deg.pop()
		document.getElementById("myId").innerHTML="";
		concat1='';
		callli();
	}
	
	function addme() {
			
		image.push('a.jpg')
		name1.push('Deepak')
		deg.push('Trainer')
		document.getElementById("myId").innerHTML="";
		concat1='';
		callli();
	}


callli();



