function birthdayCakeCandles(candles) {
    // Write your code here
    let tallCa = Math.max(...candles);
    let aux = 0;    
    
    for(let i=0; i<candles.length; i++){
        if(candles[i] == tallCa){
            aux += 1;
        }
    }
    
    return aux;
}