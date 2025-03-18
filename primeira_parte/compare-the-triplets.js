function compareTriplets(a, b) {
    var aliceBob = [0,0];
    
    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            aliceBob[0] = aliceBob[0] + 1; 
        }
        
        if(a[i] < b[i]){
            aliceBob[1] = aliceBob[1] + 1;
        }
    }
    
    return aliceBob;
}