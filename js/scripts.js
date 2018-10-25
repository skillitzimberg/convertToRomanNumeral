function convertDigit(digit, onesChar) {
  var romanDigit = "";
  for (var index = 0; index < digit; index++) {
    romanDigit += onesChar;
  }
  return romanDigit;
}

function romanize(input) {
  return convertDigit(input, "I");
}


$(document).ready(function() {
  $("form#romanization").submit(function(event) {
    event.preventDefault();

    var arabicNumbers = parseInt($("input#numericalInput").val());
    var result = romanize(arabicNumbers);
    $("#result").text(result);
  });
});
