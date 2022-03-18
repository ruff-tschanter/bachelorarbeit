var fieldNumber = 1

changeFieldNumber = function() {
  fieldNumber++;

  document.getElementsByClassName('changeFieldNumber')[0].innerHTML="F"+fieldNumber;
  document.getElementsByClassName('changeFieldNumber')[1].innerHTML="F"+fieldNumber;
}