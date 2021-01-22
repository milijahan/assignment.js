// 1. // convert kilometer to meter

function kilometerToMeter(kilometer){
    var meter = kilometer/1000;
    return meter;
}
// var padmaBridge = kilometerToMeter(6150);
// console.log(padmaBridge);

// 2.budgetCalculator



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
    
result = hotelCost(40);
console.log(result);


// 4. megaFriend

function megaFriend(name){
    var long = name[0];
     for (var i = 0; i < name.length; i++) {
        const element = name[i];
            if( long.length < element.length){
                long = element
                }
                     }
                    return long
                        }

        var  friend = ["tamanna","shaila","taniya","nilima","karina"]
        var longname = megaFriend(friend)
        console.log(longname)