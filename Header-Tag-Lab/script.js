// Write your JavaScript code here to toggle the h1 font-size between 16px and 32px when the button with id 'toggleButton' is clicked.
document.getElementById('toggleButton').addEventListener('click', function(){
    var header = document.getElementById('header'); 
    if(header.style.fontSize == "16px")
    {
        header.style.fontSize = "32px";
    }
    else
    {
        header.style.fontSize = "16px";
    }
})