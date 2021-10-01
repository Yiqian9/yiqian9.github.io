function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MzGaQopSfb":
        Script1();
        break;
      case "6r1AxB41i9A":
        Script2();
        break;
      case "5Vch1qeSxKx":
        Script3();
        break;
      case "6BbO5nVtK6s":
        Script4();
        break;
      case "5VPV3kZOjnS":
        Script5();
        break;
      case "6c1Aafzp0Io":
        Script6();
        break;
      case "6Xvr9350NQU":
        Script7();
        break;
      case "6YvhElqzimd":
        Script8();
        break;
      case "6pLL9w3QGeg":
        Script9();
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
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz4kH5W7osuA5Iuo0YJ8rKLrVNtPsBpO7Ps15aDnxx2DanesdQgNSM4xKXy78R1ZZc3ug/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "answer" : "accelerate",
 "industry" : player.GetVar("industry"),
}
}

function Script3()
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

function Script4()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script5()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz4kH5W7osuA5Iuo0YJ8rKLrVNtPsBpO7Ps15aDnxx2DanesdQgNSM4xKXy78R1ZZc3ug/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "answer" : "covering",
 "industry" : player.GetVar("industry"),
}
}

function Script6()
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

function Script7()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script8()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz4kH5W7osuA5Iuo0YJ8rKLrVNtPsBpO7Ps15aDnxx2DanesdQgNSM4xKXy78R1ZZc3ug/exec";
 
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "answer" : "space",
 "industry" : player.GetVar("industry"),
}
}

function Script9()
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

