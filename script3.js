var suck2 = document.getElementById("suck2");
var suckbtn1 = document.getElementById("suckbtn1");
var suckbtn2 = document.getElementById("suckbtn2");

var point1 = document.getElementById("point1");
var point2 = document.getElementById("point2");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var cost1 = document.getElementById("cost1");
var cost2 = document.getElementById("cost2");
var cost3 = document.getElementById("cost3");

var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");
var count3 = document.getElementById("count3");

var a = document.getElementById("a");

suckbtn1.onclick=function()
{
  point1.value = parseInt(point1.value) + 1 + parseInt(count1.value);
  
  point2.value = parseInt(point2.value) + 1 + parseInt(count3.value)*2;
  
  if(point1.value > 5)
  {
    suck2.style.display = "block";
  }
  
  if(point1.value > 0)
    a1.style.display = "block";
  if(point1.value > 30)
    a2.style.display = "block";
  if(point1.value > 60)
    a3.style.display = "block";
  if(point1.value > 100)
    a4.style.display = "block";
  if(point1.value > 200)
    a5.style.display = "block";
}

suckbtn2.onclick=function()
{
  point1.value = parseInt(point1.value) + 5 + parseInt(count2.value)*2;
  point2.value = parseInt(point2.value) + 5 + parseInt(count4.value)*5;
  
  if(point1.value > 0)
    a1.style.display = "block";
  if(point1.value > 30)
    a2.style.display = "block";
  if(point1.value > 60)
    a3.style.display = "block";
  if(point1.value > 100)
    a4.style.display = "block";
  if(point1.value > 200)
    a5.style.display = "block";
}

btn1.onclick=function()
{
  if(point2.value >= parseInt(cost1.value))
    {
      point2.value = parseInt(point2.value) - parseInt(cost1.value);
      
      count1.value = parseInt(count1.value) + 1;
      cost1.value = parseInt(cost1.value) + 5;
    }
  
  else
    {
      alert("沒技術值就趕快吸");
    }
}

btn2.onclick=function()
{
  if(point2.value >= parseInt(cost2.value))
    {
      point2.value = parseInt(point2.value) - parseInt(cost2.value);
      
      count2.value = parseInt(count2.value) + 1;
      cost2.value = parseInt(cost1.value) + 20;
    }
  
  else
    {
      alert("沒技術值就趕快吸");
    }
}

btn3.onclick=function()
{
  if(point2.value >= parseInt(cost3.value))
    {
      point2.value = parseInt(point2.value) - parseInt(cost3.value);
      
      count3.value = parseInt(count3.value) + 1;
      cost3.value = parseInt(cost3.value) + 10;
    }
  
  else
    {
      alert("沒技術值就趕快吸");
    }
}

btn4.onclick=function()
{
  if(point2.value >= parseInt(cost4.value))
    {
      point2.value = parseInt(point2.value) - parseInt(cost4.value);
      
      count4.value = parseInt(count4.value) + 1;
      cost4.value = parseInt(cost4.value) + 40;
    }
  
  else
    {
      alert("沒技術值就趕快吸");
    }
}


function ShowMe()
{
  a1.style.display = "block";
  a2.style.display = "block";
  a3.style.display = "block";
  a4.style.display = "block";
  a5.style.display = "block";
}