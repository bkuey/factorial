$(document).ready(function(){
  $(".mainform").submit(function(event){
    var myFactorial = parseInt($("#userInput").val());
    if(myFactorial === 0){
      $(".output").append("1");
    }
    else{
      // for(var i = myFactorial - 1; i > 0; i--){
      //   myFactorial *= i;
      // }
      var factorial = function(number){
        if (number === 0)
          return 1;
        else
          return number * factorial(number - 1);
      }
      myFactorial = factorial(myFactorial);
      $(".output").append(myFactorial);
    }
    event.preventDefault();
  });
});
