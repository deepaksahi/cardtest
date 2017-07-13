
var name1=["Avneet","Deepak","Anil","Nilesh"]

var k=[]

function callli(){
	
    var l= Math.floor (Math.random()*name1.length)
	k.push(name1[l])
	name1.splice(l,1)
	console.log(name1)
	console.log(k)
	if (name1.length>0)
	{
		callli();
	}



}
	

function calling2(){

for (var i=0;i<name1.length;i++)

{
	
	concat1=concat1 +'<li>'+name1[i]+'</li>';
	
	if (i==4){
	
	concat1+br
	
	}

document.getElementById("myId").innerHTML="<ul>"+concat1+"</ul>";


}







