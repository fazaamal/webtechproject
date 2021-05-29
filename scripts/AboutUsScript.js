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

  button1.onmouseover = function(){
    button1.style.backgroundColor = "#d1cbcb";
  }
  button1.onmouseout = function(){
    button1.style.backgroundColor = "yellow";
  }
  button1.onclick = function(){
    if (textbox1.style.display === 'none')
    {
      textbox1.style.display = 'block';
      textbox2.style.display = 'none';
    }
    else
    {
      textbox1.style.display = 'none';
    }

  }


var button2 = document.getElementById('button2');
var textbox2 = document.getElementById('textbox2');

  button2.onmouseover = function(){
    button2.style.backgroundColor = "#d1cbcb";
  }
  button2.onmouseout = function(){
    button2.style.backgroundColor = "yellow";
  }
  button2.onclick = function(){
    if (textbox2.style.display === 'none')
    {
      textbox2.style.display = 'block';
      textbox1.style.display = 'none';
    }
    else
    {
      textbox2.style.display = 'none';
    }

  }

var button3 = document.getElementById('button3');
var textbox3 = document.getElementById('textbox3');

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



// var button3 = document.getElementById('button3');
//
//   button3.onmouseover = function(){
//     button3.style.backgroundColor = "#d1cbcb";
//   }
//   button3.onmouseout = function(){
//     button3.style.backgroundColor = "yellow";
//   }
