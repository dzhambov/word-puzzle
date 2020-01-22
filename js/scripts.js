$(document).ready(function() {
  $("form#word-form").submit(function(event) {
    event.preventDefault();
    var result = [];
    var sentense = $("input#puzzle").val().split("");
    for(i = 0; i <= sentense.length; i ++) {
      var vowels = ["A","E", "I", "O", "U", "Y","a", "e", "i", "o", "u", "y"];
        if (vowels.includes(sentense[i])) {
          result.push("-");
        } else {
          result.push(sentense[i]);
        }
    }
    $(".output").append(result);
    // console.log(result);
    
    
  });
});