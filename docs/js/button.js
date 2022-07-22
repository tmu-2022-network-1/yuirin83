function appearGetOffButton(){
    document.getElementById("get-off").classList.remove("default");
    document.getElementById("get-off").classList.add("appear");
  }
  
  function disappearGetOffButton(){
    document.getElementById("get-off").classList.remove("appear");
    document.getElementById("get-off").classList.add("default");
  }
  
  function GetOffTrain(){
    document.getElementById("end-text").classList.add("active-text");
    document.getElementById("left-door").classList.remove("left-pos");
    document.getElementById("left-door").classList.add("activeLeft");
    document.getElementById("right-door").classList.remove("right-pos");
    document.getElementById("right-door").classList.add("activeRight");
    document.getElementById("get-off").classList.add("hide");
    document.getElementById("back-button").classList.add("appear");
  }
  
  function inTonnel(){
    document.getElementById("nowTonnel").classList.add("inTonnel");
  }
  
  function exitTonnel(){
    document.getElementById("nowTonnel").classList.remove("inTonnel");
  }
  
  function backToStart(){
    document.getElementById("end-text").classList.remove("active-text");
    document.getElementById("left-door").classList.add("left-pos");
    document.getElementById("left-door").classList.remove("activeLeft");
    document.getElementById("right-door").classList.add("right-pos");
    document.getElementById("right-door").classList.remove("activeRight");
    document.getElementById("get-off").classList.remove("hide");
    document.documentElement.scrollTop = 0;
    document.getElementById("back-button").classList.remove("appear");
  }