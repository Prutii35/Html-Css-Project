function function1()
{
	
	let c11=document.getElementById("col1");
	let c2=document.getElementById("col2");
	let c33=document.getElementById("col3");
	let c44=document.getElementById("col4");

	c11.style.visibility="visible";
	c2.style.visibility="hidden";
	c33.style.visibility="hidden";
	c44.style.visibility="hidden";
}



function function2()
{
	
	let c11=document.getElementById("col1");
	let c22=document.getElementById("col2");
	let c33=document.getElementById("col3");
	let c44=document.getElementById("col4");

	c11.style.visibility="hidden";
	c22.style.visibility="visible";
	c33.style.visibility="hidden";
	c44.style.visibility="hidden";
}


function function3()
{
	
	let c11=document.getElementById("col1");
	let c22=document.getElementById("col2");
	let c33=document.getElementById("col3");
	let c44=document.getElementById("col4");

	c11.style.visibility="hidden";
	c22.style.visibility="hidden";
	c33.style.visibility="visible";
	c44.style.visibility="hidden";
}


function function4()
{
	
	let c11=document.getElementById("col1");
	let c22=document.getElementById("col2");
	let c33=document.getElementById("col3");
	let c44=document.getElementById("col4");

	c11.style.visibility="hidden";
	c22.style.visibility="hidden";
	c33.style.visibility="hidden";
	c44.style.visibility="visible";
}

function function5()
{
	
	let c11=document.getElementById("col1");
	let c22=document.getElementById("col2");
	let c33=document.getElementById("col3");
	let c44=document.getElementById("col4");

	c11.style.visibility="visible";
	c22.style.visibility="visible";
	c33.style.visibility="visible";
	c44.style.visibility="visible";
}

var filme = [];
var i=0;

function functie()
{

	let casuta1 = document.getElementById("casa1");
	let casuta2 = document.getElementById("casa2");
	let casuta3 = document.getElementById("casa3");
	var l = document.getElementsByName("vehicle");
	for(let m = 0 ; m < l.length ; m ++)
	{
		if(l[m].checked ==true)
		{	
			if(m==0)
			filme[i]="Thriller";
			if(m==1)
			filme[i]="Drama";
			if(m==2)
			filme[i]="Time Travel";
			i++;
		}
	}
	
	alert("Alegerea dumneavoastra a fost salvata");

	for(let t = 0 ; t<i;t++)
	{
		alert("Ati ales ".concat(filme[t]));
	}
}

window.onload=function()
{
	let c1=document.getElementById("c1");
	c1.onclick=function1;
	
	let c2=document.getElementById("c2");
	c2.onclick=function2;
	
	let c3=document.getElementById("c3");
	c3.onclick=function3;
	
	let c4=document.getElementById("c4");
	c4.onclick=function4;
	
	let al=document.getElementById("all");
	al.onclick=function5;



	
	let sub=document.getElementById("sub");
	sub.onclick=functie;




	

}