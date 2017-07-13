var name1=["Avneet","Deepak","Anil","Nilesh"]

var k=[]

var concat1='';

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
	 else {
		 
		
		 calling2();
		 }


}
	
	callli();
	

function calling2(){
	
	

for (var i=0;i<k.length;i++)

{
	
	concat1=concat1 + '<li style="display:inline">' + k[i] +'</li>';
	
	if (i==2){
	
	concat1=concat1+"<br>"
	
	}

document.getElementById("myId").innerHTML="<ul>"+concat1+"</ul>";


}
}







