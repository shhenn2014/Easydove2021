AOS.init();

// Get the modal2
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("modal-contenthide");
var contenthide = document.getElementById("contenthide");
var contenthide2 = document.getElementById("contenthide2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn3 = document.getElementById("myBtn2");
var fakebtn = document.getElementById("fake");
var fakebtn2 = document.getElementById("fake2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

fakebtn.onclick = function() {
  contenthide.style.display = "block";
}
fakebtn2.onclick = function() {
  contenthide2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}

// 按鈕特殊指令
function keyFunction() 
{
  if ((event.keyCode ==77) && (event.ctrlKey))
   {     window.open("https://shhenn2014.github.io/Easydove2021/Magic");
   }
}
document.onkeydown=keyFunction;