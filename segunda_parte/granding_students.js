function gradingStudents(grades) {
    // Write your code here
    let notaFinal = []
    
    for(let i = 0; i < grades.length; i++){
        let notas = grades[i];
        
        if(grades[i] < 38){
            notaFinal.push(grades[i]);
        }
        
        else{
            while(notas % 5 !== 0){
                notas++
            }
            
            if(notas-grades[i] < 3){
                notaFinal.push(notas);
            }
            else{
                notaFinal.push(grades[i]);
            }
        }
    }
    return notaFinal;
}