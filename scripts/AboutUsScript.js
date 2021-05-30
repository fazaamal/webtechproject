var button1 = document.getElementById('button1');
var textbox1 = document.getElementById('textbox1');
var arrow1 = document.getElementById('arrow1');
var header1 = document.getElementById('header1');

button1.onmouseover = function(){
  button1.style.backgroundColor = "#d1cbcb";
}
button1.onmouseout = function(){
  button1.style.backgroundColor = "yellow";
}
button1.onclick = function(){
  textbox1.style.display = 'block';
  textbox2.style.display = 'none';
  textbox3.style.display = 'none';

  arrow1.src = 'images/arrowleft.png';
  arrow2.src = 'images/arrowright.png';
  arrow3.src = 'images/arrowright.png';

  header1.style.fontWeight = 'bold';
  header2.style.fontWeight = 'normal';
  header3.style.fontWeight = 'normal';

  button1.style.borderWidth = '3px';
  button2.style.borderWidth = '1px';
  button3.style.borderWidth = '1px';
}


var button2 = document.getElementById('button2');
var textbox2 = document.getElementById('textbox2');
var arrow2 = document.getElementById('arrow2');
var header2 = document.getElementById('header2');

button2.onmouseover = function(){
  button2.style.backgroundColor = "#d1cbcb";
}
button2.onmouseout = function(){
  button2.style.backgroundColor = "yellow";
}
button2.onclick = function(){
  textbox2.style.display = 'flex';

  textbox1.style.display = 'none';
  textbox3.style.display = 'none';
  arrow2.src = 'images/arrowleft.png';
  arrow1.src = 'images/arrowright.png';
  arrow3.src = 'images/arrowright.png';

  header2.style.fontWeight = 'bold'
  header1.style.fontWeight = 'normal'
  header3.style.fontWeight = 'normal'

  button2.style.borderWidth = '3px';
  button1.style.borderWidth = '1px';
  button3.style.borderWidth = '1px';
}

var button3 = document.getElementById('button3');
var textbox3 = document.getElementById('textbox3');
var arrow3 = document.getElementById('arrow3');
var header3 = document.getElementById('header3');

button3.onmouseover = function(){
  button3.style.backgroundColor = "#d1cbcb";
}
button3.onmouseout = function(){
  button3.style.backgroundColor = "yellow";
}

button3.onclick = function(){
  textbox3.style.display = 'block';

  textbox1.style.display = 'none';
  textbox2.style.display = 'none';
  arrow3.src = 'images/arrowleft.png';
  arrow1.src = 'images/arrowright.png';
  arrow2.src = 'images/arrowright.png';

  header3.style.fontWeight = 'bold'
  header1.style.fontWeight = 'normal'
  header2.style.fontWeight = 'normal'

  button3.style.borderWidth = '3px';
  button1.style.borderWidth = '1px';
  button2.style.borderWidth = '1px';
}
