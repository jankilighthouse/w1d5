function maxProfit(arr){
var maxProfit = -1;
var current_profit = 0;
var buy_price=0;
var sell_price=0;

var index_change = true;

for(var i=0; i<arr.length - 1 ; i++) // using Brute Force

{
  sell_price = arr[i+1];
  if(index_change)
  {
    buy_price=arr[i];
  }
  if(buy_price> sell_price)
  {
    index_change = true;
  }
  else
  {
    current_profit =  sell_price - buy_price;


  if(current_profit>maxProfit)
  {
    maxProfit=current_profit;
    index_change=false;

  }
}
}
return maxProfit;

}
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))