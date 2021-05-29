$(function() {
  $("#accordion").accordion();
});
var submitBtn = document.getElementById("submitBtn");
var form = document.getElementById("form")
var ele = ['name','email','amount','number','month','year','cvv'];

function hasNumber(myString) {
  return /\d/.test(myString);
}

submitBtn.onclick = function(){
  var empty = []
  var alertString = "";
  for(el of ele){
    console.log(el);
    if(document.getElementById(el).value.length == 0){
      empty.push(el);
    }

    if(document.getElementById(el).value.length != 0){
      document.getElementById(el).style.removeProperty("border");
    }
  }
  for(el of empty){
    document.getElementById(el).style.border = "1px solid red";
  }

  if(empty.length == 0){
    if(document.getElementById("email").value.includes('@') == false){
      alertString += "\n Insert a valid email";
    }

    let isnum = /^\d+$/.test(document.getElementById("amount").value);

    if(isnum == false){
      alertString += "\n Insert a valid amount (whole numbers)";
    }

    isnum = /^\d+$/.test(document.getElementById("number").value);

    if(isnum == false|| document.getElementById("number").value.length != 16){
      alertString += "\n Insert a valid 16 digit card number (no spaces)";
    }

    isnum = /^\d+$/.test(document.getElementById("month").value);

    if(isnum == false || document.getElementById("month").value.length != 2){
      alertString += "\n Insert a valid month (format: MM)";
    }

    isnum = /^\d+$/.test(document.getElementById("year").value);
    if(isnum == false || document.getElementById("year").value.length != 2){
      alertString += "\n Insert a valid year (format: YY)";
    }

    isnum = /^\d+$/.test(document.getElementById("cvv").value);

    if(isnum == false || document.getElementById("cvv").value.length != 3){
      alertString +="\n Insert a valid 3 digit CVV";
    }

    if(alertString.length !=0){
      console.log(alertString);
      alert(alertString);
    }

  }

  if(empty.length == 0 && alertString.length == 0){
    form.submit();
    alert("Donation successful! Thank you for the donation!");
  }
}
