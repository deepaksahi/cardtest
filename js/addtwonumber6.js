
var image=['a.jpg','d.jpg','aa.jpg','n.jpg']
var name1=["Avneet","Deepak","Anil","Nilesh"]
var deg=["Trainer","UI Desinger","UI Developer","Html "]

var concat1='';

function callli(){

for (var i=0;i<image.length;i++)

{
	
	concat1=concat1 + '<li id=""><div class="firstbox"><div class="firstbox_left"><img src="images/' + image[i] + '"></div><div class="firstbox_right"><h1>'+name1[i]+'</h1><p>'+deg[i]+'</p></div><div class="clear"></div></div></li>';

}

document.getElementById("myId").innerHTML="<ul>"+concat1+"</ul>";
document.getElementById("myId").child('li') = ;

}

callli();



