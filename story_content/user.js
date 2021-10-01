function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hPcD0tYKFN":
        Script1();
        break;
      case "6pr9gMlidmr":
        Script2();
        break;
      case "6hB3cKbrPp2":
        Script3();
        break;
      case "6DoBlM8a2hd":
        Script4();
        break;
      case "5lpVLpizPNZ":
        Script5();
        break;
      case "6EWhQwfZjc1":
        Script6();
        break;
      case "5klxaQxMIFT":
        Script7();
        break;
      case "6REo7vuEFnl":
        Script8();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "
https://script.google.com/macros/s/AKfycbxN7njMDweVzPRISQ6MRIVIcKxC0PR53z4D_0oS_YDu2JJ9hYI-8E0ovN7YKvvYo7CLKg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "industry" : player.GetVar("industry"),
}
}

function Script3()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script4()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxN7njMDweVzPRISQ6MRIVIcKxC0PR53z4D_0oS_YDu2JJ9hYI-8E0ovN7YKvvYo7CLKg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "answer" : "covering",
}
}

function Script5()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script6()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script7()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxN7njMDweVzPRISQ6MRIVIcKxC0PR53z4D_0oS_YDu2JJ9hYI-8E0ovN7YKvvYo7CLKg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 
 "answer" : "space",
}
}

function Script8()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

