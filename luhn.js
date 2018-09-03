function LuhnAlgorithm(num) {
var input_num=num.toString();
var sum=0;
var doubleSec = false;

// from the right to left, double every other digit starting with the second to last digit.*/

for(var i= input_num.length-1;i>=0;i--){

  var curDigit = parseInt(input_num.charAt(i));
  if(doubleSec)
  {
    if((curDigit*2)>9)
    {
      sum += (curDigit * 2) - 9; //doubled number is greater than 9 than subtracted 9 */

    }
    else
    {
      sum += curDigit * 2;
    }
  }
    else
    {
      sum += curDigit;

    }
    var doubleSec =! doubleSec
  }

return (sum % 10) == 0 ?true :false;
};


console.log(LuhnAlgorithm(79927398713));