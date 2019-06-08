//given a array of numbers, find the numbers that are not duplicate
//example: 
//input: [1,2,2,3,1,4,5,5] 
//output: [3,4]

// Approach #1 with runtime complexity: O(n^2) quadratic time
let oddElement = (n)=>{
    let oddList = []
    let checkNum; 
    for(let i = 0; i<n.length; i++){
        checkNum = n[i]; 
        for( let j = i+1; j<n.length; j++){
            if(checkNum === n[j] && checkNum !== false){
                   n[i] = false; 
                   n[j] =  n[i];
                   break; 
            }
        }

    }
    for(let k = 0; k<n.length; k++){
        if(n[k]!==false){
            oddList.push(n[k]); 
        }
    }

    return oddList; 
}

//calling: 
oddElement([1, 10, 10, 100, 100, 13, 16, 22, 22, 23, 23, 23, 23, 25, 26, 27, 27, 27, 27, 27, 30, 30, 31, 33, 33, 36, 36, 37, 38, 38, 4, 40, 40, 41, 42, 43, 44, 44, 45, 47, 47, 48, 48, 48, 49, 49, 49, 5, 5, 51, 52, 52, 52, 53, 56, 58, 6, 6, 60, 60, 60, 61, 61, 62, 62, 63, 63, 64, 65, 65, 65, 69, 69, 69, 73, 73, 74, 74, 76, 79, 79, 79, 79, 79, 8, 8, 80, 84, 85, 85, 86, 90, 90, 91, 96, 96, 97, 98, 98, 99])
oddElement([1,2,3,2,1,4,4,5])