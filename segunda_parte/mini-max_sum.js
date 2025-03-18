function miniMaxSum(arr) {
    // Write your code here
    let minSoma = 0;
    let maxSoma = 0;
    let sortA = arr.sort();
    
    for(let i=0; i<arr.length - 1; i++){
        minSoma += arr[i];
        maxSoma += arr[i + 1];
    }
    
    console.log(minSoma, maxSoma);
}