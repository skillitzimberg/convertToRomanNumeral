function convertDigit(digit, onesChar, fivesChar) {
  var romanDigit = "";
  var numOnes = 0;

  if(digit === 4) {
    romanDigit += onesChar + fivesChar
  } else {
    numOnes = digit;
  }
  
  for (var index = 0; index < numOnes; index++) {
    romanDigit += onesChar;
  }

  return romanDigit;
}

function romanize(input) {
  return convertDigit(input, "I", "V");
}


$(document).ready(function() {
  $("form#romanization").submit(function(event) {
    event.preventDefault();

    var arabicNumbers = parseInt($("input#numericalInput").val());
    var result = romanize(arabicNumbers);
    $("#result").text(result);
  });
});
