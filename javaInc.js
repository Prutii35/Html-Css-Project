window.onload = function ()
{
    var d = new Date();
    d.setFullYear(2018);
    document.getElementById("data").innerHTML = d;

    var i = document.getElementById("sageata");
    i.onclick = function ()
    {
        event.stopPropagation();
        myWindow = window.open("file:///C:/Users/User/Desktop/Proiect%20TehniciWeb/drag.html", "_blank", "width=500, height=800");
    }

    var ii = document.getElementById("sageata2");
    ii.onclick = function()
    {
        event.stopPropagation();
        myWindow.close();
    }

    ///navigare arbore

    let di = document.getElementById("quest");
    var theCSSprop = window.getComputedStyle(di, null).getPropertyValue("background-color");

    let t = document.getElementById("open").onclick = function()
    {
        event.stopPropagation();
         this.parentElement;
         x.style.background = "white";
         alert("Your background will be  " + theCSSprop);
         
    }

    var d = document.getElementById("quest").onclick = function()
         {
             var y = document.getElementById("quest").children;
             y[1].style.color="black";
             y[0].style.color="black";
            
         }

    //get compstyle
    


}


