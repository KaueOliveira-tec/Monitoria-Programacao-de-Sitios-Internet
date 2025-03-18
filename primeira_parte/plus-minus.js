function plusMinus(arr) {
    var size = arr.length;
    var numPositive = 0;
    var numNegative = 0;
    var numZero = 0;
    
    for(var i = 0; i < size; i++){
        if(arr[i] > 0){
            numPositive += 1;
        }   else if(arr[i] < 0){
                numNegative += 1;
            }   else {
                    numZero += 1;
                }
    }
    
    var positive = numPositive / size;
    var negative = numNegative / size;
    var neutral = numZero / size;
    
    console.log(positive.toFixed(6), "\n" + negative.toFixed(6), "\n" + neutral.toFixed(6));
}