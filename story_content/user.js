function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64JcBpZtAF4":
        Script1();
        break;
      case "6h611l62K5b":
        Script2();
        break;
      case "62Ntt3ONAhH":
        Script3();
        break;
      case "6TCbv6xIslt":
        Script4();
        break;
      case "6pLBnZPZRdi":
        Script5();
        break;
      case "6W390caaEaO":
        Script6();
        break;
      case "6NZnaMF6mIH":
        Script7();
        break;
      case "6mtb0VpXHwS":
        Script8();
        break;
      case "5rM7R1xd2zW":
        Script9();
        break;
      case "5ekDBoRgPCW":
        Script10();
        break;
      case "5kcqMxzFZmJ":
        Script11();
        break;
      case "5zMSRFKErXa":
        Script12();
        break;
      case "6hzimTdDiVJ":
        Script13();
        break;
      case "5icRPuPRzoc":
        Script14();
        break;
      case "5eXuhNl0Tkc":
        Script15();
        break;
      case "5ecrtKa2H9l":
        Script16();
        break;
      case "6FKOXPFPik1":
        Script17();
        break;
      case "6WNdask0U4U":
        Script18();
        break;
      case "6n1OvetuIX3":
        Script19();
        break;
      case "5rQBs4bOPFa":
        Script20();
        break;
      case "5cmd2yJ580l":
        Script21();
        break;
      case "67pXeenyWbY":
        Script22();
        break;
      case "6PwgVHUYjFm":
        Script23();
        break;
      case "6OPav9V8ewq":
        Script24();
        break;
      case "6F3P8jKfkOS":
        Script25();
        break;
      case "6CsLxD32oUs":
        Script26();
        break;
      case "5Vo7F4I4rTP":
        Script27();
        break;
      case "5YXYuz5C6Wo":
        Script28();
        break;
      case "6THZsp3VWuC":
        Script29();
        break;
      case "6YnJXpWwgPo":
        Script30();
        break;
      case "6kDcZT2R38J":
        Script31();
        break;
      case "5a9gqzHKURu":
        Script32();
        break;
      case "5oRvU0JrB90":
        Script33();
        break;
      case "5aXU4CQklfL":
        Script34();
        break;
      case "6N7Sp5e4M9T":
        Script35();
        break;
      case "65yWZrSsbRc":
        Script36();
        break;
      case "5wN2In3AfrI":
        Script37();
        break;
      case "6XYHf49ZeVS":
        Script38();
        break;
      case "6E7IETTtRkm":
        Script39();
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
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz4kH5W7osuA5Iuo0YJ8rKLrVNtPsBpO7Ps15aDnxx2DanesdQgNSM4xKXy78R1ZZc3ug/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
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

function Script10()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script11()
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
 "answer" : "maxdiff",
 "industry" : player.GetVar("industry"),
}
}

function Script12()
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

function Script13()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script14()
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
 "answer" : "choice",
 "industry" : player.GetVar("industry"),
}
}

function Script15()
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

function Script16()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script17()
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
 "answer" : "custom",
 "industry" : player.GetVar("industry"),
}
}

function Script18()
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

function Script19()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script20()
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
 "answer" : "taguchi",
 "industry" : player.GetVar("industry"),
}
}

function Script21()
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

function Script22()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script23()
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
 "answer" : "split",
 "industry" : player.GetVar("industry"),
}
}

function Script24()
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

function Script25()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script26()
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
 "answer" : "mix",
 "industry" : player.GetVar("industry"),
}
}

function Script27()
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

function Script28()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script29()
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
 "answer" : "full",
 "industry" : player.GetVar("industry"),
}
}

function Script30()
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

function Script31()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script32()
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
 "answer" : "response",
 "industry" : player.GetVar("industry"),
}
}

function Script33()
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

function Script34()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script35()
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
 "answer" : "screeningdsd",
 "industry" : player.GetVar("industry"),
}
}

function Script36()
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

function Script37()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script38()
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
 "answer" : "fullandresponse",
 "industry" : player.GetVar("industry"),
}
}

function Script39()
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

