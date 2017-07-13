
var name1=[1,2,3,4,5,4,3]



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
	
	
callli();



