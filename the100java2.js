window.onload = function()
{
    var d = document.getElementById("dreapta").offsetHeight;
    document.getElementById("stanga").style.height = d + "px";
    document.getElementById("dreapta").style.height = d + "px";
    
}