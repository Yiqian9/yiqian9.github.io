function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YQj5avvalN":
        Script1();
        break;
      case "68uoEdGwZfl":
        Script2();
        break;
      case "6HeZC03Nv8Q":
        Script3();
        break;
      case "6mhFv5tR6eH":
        Script4();
        break;
      case "5dqkP8sI96L":
        Script5();
        break;
      case "6amvHK4pHEK":
        Script6();
        break;
      case "6Ki0iKQqzYk":
        Script7();
        break;
      case "6hvnZoJOEM3":
        Script8();
        break;
      case "6i1DJbbaLCz":
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
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxlCDePi6jIYPMxSyEpGOAFLHhLhOg0Gl6IF2V63clM92lC0ufp85cIAREPIoKldsFrUQ/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "answer" : "space filling",
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
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxlCDePi6jIYPMxSyEpGOAFLHhLhOg0Gl6IF2V63clM92lC0ufp85cIAREPIoKldsFrUQ/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "answer" : "maxdiff",
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
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxlCDePi6jIYPMxSyEpGOAFLHhLhOg0Gl6IF2V63clM92lC0ufp85cIAREPIoKldsFrUQ/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "answer" : "choice",
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

