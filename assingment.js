// 1. // convert kilometer to meter

function kilometerToMeter(kilometer){
    var meter = kilometer/1000;
    return meter;
}






// 2.budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    var watchbudget = watch * 50;     
    var mobilebudget = mobile * 100;    
    var laptopbudget = laptop * 500;  
    var total = watchbudget + mobilebudget + laptopbudget;
    return total;
}






// 3.hotelCost

function hotelCost(day){
    var totalCost = 0;
     if(day <= 10){

            totalCost = day * 100;   
        }

        else if(day <= 20){
            var first10Day = 10 * 100;
            var remaining = day - 10;
            var second10Day = remaining * 80;
            totalCost = first10Day + second10Day;
        }


        else{
            var first10Day = 10 * 100;
            var second10Day = 10 * 80;
            var remaining = day - 20;
            var NextDay = remaining * 50;
            totalCost = first10Day + second10Day + NextDay;
        }


        return totalCost;
    }
    






// 4. megaFriend

function megaFriend(name){

    var long = name[0];
    
    for (var i = 0; i < name.length; i++) {
        var element = name[i];

      if( long.length < element.length){
         long = element
      }
      }
      return long
      }

        