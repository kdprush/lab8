function init(){
  //add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');
  
  function showMeText(){
    var entryinput = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = entryinput.value;
    alert("Kat: " + entryinput.value);
  }
  button.addEventListener('click', showMeText);
  }
  window.addEventListener('load', init);