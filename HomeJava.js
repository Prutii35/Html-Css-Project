function menuOff()
{
    let m = document.getElementById("dropMenu");
    m.style.display = "none";
}

function menuOn()
{
    let m = document.getElementById("dropMenu");
    m.style.display = "block";

  
}

function searchOn()
{
    let s = document.getElementById("searchBox");
    s.style.display = "block";
}

function searchOff()
{
    let s = document.getElementById("searchBox");
    s.style.display = "none";
}



window.onload = function()
{
        let menu = document.getElementById("divMeniu");
        menu.onmouseover = menuOn;
        menu.onmouseleave = menuOff;

        let searchImg = document.getElementById("search");
        searchImg.onmouseover = searchOn;
        searchImg.onmouseleave = searchOff;

       
  
}