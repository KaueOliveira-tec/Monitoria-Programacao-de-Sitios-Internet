function getTotalX(a, b) {
    // Write your code here
    let xFactorA = a[0];
    let xFactorB = b[0];
    let aux = 0;
    
    for(let i = 0; i < a.lenght; i++){
        if(xFactorA < a[i]){
            xFactorA = a[i];
        }
    }     
    
    for(let x = xFactorA; x <= xFactorB; x++){
        let divisivelA = true;
        let divisorB = true;
    
            for(let i = 0; i < a.length; i++){
                if(x % a[i] !== 0){
                    divisivelA = false;
                    break;
                }
            }
           
            for(let i = 0; i < b.length; i++){
                if(b[i] % x !== 0){
                    divisorB = false;
                    break;
                }
            }
            
        if(divisivelA && divisorB){
            aux++;
        } 
    }
    return aux;
}