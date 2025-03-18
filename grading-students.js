function gradingStudents(grades) {
let notaFinal = []
    
for(let i = 0; i < grades.length; i++){
    let notas = grades[i];
    
    if(notas[i] < 38){
        notaFinal.push(grades[i]);
    }
        else{
            while(notas[i] % 5 !== 0){
                notas++;
            }
            
            if(notas-grades[i] < 3){
                notaFinal.push(notas);
            }
                else{
                    notaFinal.push(grades[i]);
                }
        }
    return notaFinal;
}
}