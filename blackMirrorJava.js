window.onload = function()
{
    let i = document.getElementById("titlu1");
    i.onmouseenter = function ()
    {
        i.src = "blackmirrortitlu2.png";
        i.style.height = "100px";
    }
    i.onmouseleave = function()
    {
        i.src = "blackmirrortitlu1.png";
        i.style.height = "150px";
    }

    

    
}