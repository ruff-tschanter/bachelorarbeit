var fieldNumber = 1

fields=document.getElementsByClassName('changeFieldNumber');

changeFieldNumber = function() {
  fieldNumber++;

  for (i = 0; i<fields.length; i++ ){
    document.getElementsByClassName('changeFieldNumber')[i].innerHTML="F"+fieldNumber;
  }
  
}