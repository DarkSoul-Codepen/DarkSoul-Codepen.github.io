// Write your JavaScript event listener for colorButton here
var colorButton = document.getElementById('colorButton');
var myParagraph = document.getElementById('myParagraph');
var count = 0;
function colorchange() 
{
	if(count == 0)
	{
		myParagraph.style.color = "red";
		count = count+1;
	}
	else if(count == 1) 
	{
		myParagraph.style.color = "green";
		count = count+1;
	}
	else if(count == 2)
	{
		myParagraph.style.color = "blue";
		count = 0;
	}
	
}