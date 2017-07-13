
var rakhi=["ram","mohan","kiran","Suman"]
var concat1='';

for (var i=0;i<rakhi.length;i++)
{
	var col = '';var idd='';
	if(i==1) {
		col = "style='color:red'";
		idd = "id='myname'";
	}
	if(i==2) {
		col = "style='color:green'";
	}

	concat1=concat1 + "<li " + idd + col + ">"+rakhi[i]+"</li>";


}

document.getElementById("myId").innerHTML="<ul>"+concat1+"</ul>";




