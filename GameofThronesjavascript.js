function ninge()
{
    var T= setInterval(function()
	{	
		
		let x = document.createElement("IMG");
		x.src = "fulg.png";
		x.setAttribute("id", "fulg");
        document.getElementById("inceputNinsoare").appendChild(x);
        
		let m =	(Math.random() * window.outerWidth)-80;
		x.style.marginLeft = m +"px";
		
		let wid = Math.floor(Math.random() * 80) ; 
		
		x.style.width = wid + "px";
		x.style.height = wid + "px";
		
		
	
	
		
		x.viteze = 10 ;
		x.x1=0;
		x.w=wid;
		x.h=wid;
	
		var t= setInterval(function(f)
		{
			(f.x1)++;
			f.style.top = f.x1 + "px";
			f.h=f.h - 0.1;
			f.w=f.w - 0.1;
			f.style.height=  f.h + "px";
			f.style.width= f.w + "px";
			if(f.h < 5 && f.w < 5)
			{
				f.remove();
				clearInterval(t);
				
			}
			
		}
		
        ,50,x)	
        
        let b = document.getElementById("titlu");
        b.onclick = function()
        {
            clearInterval(T);
        }
	
    }

    
	    ,500)
}


window.onload=function()
{
    let b = document.getElementById("titlu");
    b.onclick = function ()
    {
        ninge();
    }

}