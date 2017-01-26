var mas=["images/gallery/pic1.png","images/gallery/pic2.png","images/gallery/pic3.png","images/gallery/pic4.png","images/gallery/pic5.png","images/gallery/pic6.png","images/gallery/pic7.png","images/gallery/pic8.png","images/gallery/pic9.png","images/gallery/pic10.png"];
var pic=["","images/gallery/right.png","images/gallery/left.png"];
var to=0;


function right_arrow()
{ 
 var obj=document.getElementById("img");
 var obj2=document.getElementById("right");
 var obj3=document.getElementById("left");
  if (to<mas.length-1) 
  {
	to++;
	obj.src=mas[to];
	obj3.src=pic[2];
  }
  if (to==mas.length-1)
	  obj2.src=pic[0];
 }

function left_arrow()
{     
 var obj=document.getElementById("img");
 var obj2=document.getElementById("right");
 var obj3=document.getElementById("left");
 if (to>0) 
 {
	 to--;
	 obj.src=mas[to];
	 obj2.src=pic[1];
 }
 if (to==0)
	 obj3.src=pic[0];
  			 
}