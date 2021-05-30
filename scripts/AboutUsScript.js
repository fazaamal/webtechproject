// var textbox1 = document.getElementById('textbox1');
//
// function displayFunction() {
//   if (textbox1.style.display === 'none')
//   {
//     textbox1.style.display = 'block';
//   }
//   else
//   {
//     textbox1.style.display = 'none';
//   }
// }

var button1 = document.getElementById('button1');
var textbox1 = document.getElementById('textbox1');
var arrow1 = document.getElementById('arrow1');

button1.onmouseover = function(){
  button1.style.backgroundColor = "#d1cbcb";
}
button1.onmouseout = function(){
  button1.style.backgroundColor = "yellow";
}
button1.onclick = function(){
  textbox1.style.display = 'block';
  // textbox1.style.backgroundColor = 'green';
  // textbox1.style.font-weight = 'bold';

  textbox2.style.display = 'none';
  textbox3.style.display = 'none';
  arrow1.src = 'images/arrowleft.png';
  arrow2.src = 'images/arrowright.png';
  arrow3.src = 'images/arrowright.png';
  // textbox2.style.backgroundColor = 'yellow';
  // textbox2.style.font-weight = 'normal';
}


var button2 = document.getElementById('button2');
var textbox2 = document.getElementById('textbox2');
var arrow2 = document.getElementById('arrow2');

button2.onmouseover = function(){
  button2.style.backgroundColor = "#d1cbcb";
}
button2.onmouseout = function(){
  button2.style.backgroundColor = "yellow";
}
button2.onclick = function(){
  textbox2.style.display = 'block';
  // textbox2.style.backgroundColor = 'green';
  // textbox2.style.font-weight = 'bold';

  textbox1.style.display = 'none';
  textbox3.style.display = 'none';
  arrow2.src = 'images/arrowleft.png';
  arrow1.src = 'images/arrowright.png';
  arrow3.src = 'images/arrowright.png';
  //   textbox1.style.backgroundColor = 'yellow';
  //   textbox1.style.font-weight = 'normal';
  //
}

var button3 = document.getElementById('button3');
var textbox3 = document.getElementById('textbox3');
var arrow3 = document.getElementById('arrow3');

button3.onmouseover = function(){
  button3.style.backgroundColor = "#d1cbcb";
}
button3.onmouseout = function(){
  button3.style.backgroundColor = "yellow";
}
// button3.onclick = function(){
//   if (textbox3.style.display === 'none')
//     {
//      textbox3.style.display = 'block';
//      textbox1.style.display = 'none';
//     }
  // else
  //   {
  //    textbox3.style.display = 'none';
  //   }
button3.onclick = function(){
  textbox3.style.display = 'block';
  // textbox2.style.backgroundColor = 'green';
  // textbox2.style.font-weight = 'bold';

  textbox1.style.display = 'none';
  textbox2.style.display = 'none';
  arrow3.src = 'images/arrowleft.png';
  arrow1.src = 'images/arrowright.png';
  arrow2.src = 'images/arrowright.png';
  //   textbox1.style.backgroundColor = 'yellow';
  //   textbox1.style.font-weight = 'normal';
  //
}


// var button3 = document.getElementById('button3');
//
//   button3.onmouseover = function(){
//     button3.style.backgroundColor = "#d1cbcb";
//   }
//   button3.onmouseout = function(){
//     button3.style.backgroundColor = "yellow";
//   }
