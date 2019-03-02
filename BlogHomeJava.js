function schimba()
{
    let s = document.getElementById("seriale");
    s.style.borderColor = "mistyrose"; 

    let f = document.getElementById("filme");
    f.style.opacity = "0.4";
}

function schimba2()
{
    let s = document.getElementById("seriale");
    s.style.borderColor = "black"; 

    let f = document.getElementById("filme");
    f.style.opacity = "1";
}



window.onload = function()
{
    let s = document.getElementById("seriale");
    s.onmouseover = schimba;
    s.onmouseleave = schimba2;
}