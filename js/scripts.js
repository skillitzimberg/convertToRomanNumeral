function convertDigit(digit, onesChar, fivesChar, tensChar) {
  var romanDigit = "";
  var numOnes = 0;

  if((digit >= 0) && (digit <= 9)) {
    if (digit === 9) {
      romanDigit += onesChar + tensChar;
    } else if (digit >= 5) {
      numOnes = digit - 5;
      romanDigit += fivesChar;
    } else if (digit === 4) {
      romanDigit += onesChar + fivesChar;
    } else {
      numOnes = digit;
    }

    for (var index = 0; index < numOnes; index++) {
      romanDigit += onesChar;
    }
  }

  return romanDigit;
}

function romanize(input) {
  var result = ""
  var remainder = (input % 1000);
  var thousands = input - remainder;
  var hundreds = remainder - remainder % 100;
  remainder = remainder - hundreds;
  var tens = remainder - remainder % 10;
  var ones = remainder - tens;

  result += convertDigit(thousands / 1000, "M", "e", "e");
  result += convertDigit(hundreds / 100, "C", "D", "M");
  result += convertDigit(tens / 10, "X", "L", "C");
  result += convertDigit(ones, "I", "V", "X");

  return result;
}


$(document).ready(function() {
  $("form#romanization").submit(function(event) {
    event.preventDefault();

    var arabicNumbers = parseInt($("input#numericalInput").val());

    if (arabicNumbers >= 1 && arabicNumbers <= 3999) {
      var result = romanize(arabicNumbers);
      $("#result").text(result);
    } else {
      $("#result").text("Romans only used numbers from 1 to 3,999. Please enter a number in that range.");
    }

  });
});
