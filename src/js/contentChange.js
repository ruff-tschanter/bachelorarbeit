var fieldNumber = 1

changeFieldNumber = function() {
  fieldNumber++;

  document.getElementsByClassName('changeFieldNumber')[0].innerHTML=fieldNumber;
  document.getElementsByClassName('changeFieldNumber')[1].innerHTML="(F"+fieldNumber+")";
}