function sumOfNum(arr){
    let sum=0
    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
    return sum
}
let data=[2,3,4,5,6];
let results=sumOfNum(data);
console.log(results);

function sumOfEven(arr){
    let total=0;
    for(let num of arr){
        if(num %2===0){
            total +=num
        }
    }
    return total
};

function sumOfOdd(arr){
    let total=0;
    for(let num of arr){
        if(num %2!==0){
            total +=num
        }
    }
    return total
}
let myData=[1,2,3,45,6,6,78,];
let results=sumOfEven(myData);
console.log("sum of Even",results);
let res=sumOfOdd( myData);
console.log("sum of Odd", res);

function sumOfPositiveNum(arr){
   let total=0;
for(let num of arr){
    if(num > 0){
        total +=num
    }
}
return total
}
let data=[-2.-3,-5,2,3,5,-6]
let resultsOfposi=sumOfPositiveNum(data);
console.log("sum of Positive", resultsOfposi)

function sumOfNigative(arr){
    let total=0;
    for(let num of arr){
        if(num <0){
            total +=num
        }
    }
    return total
}


let sumOfNagi=[2,4,5,7,-3,5,-78];
let sumNegitive=sumOfNigative(sumOfNagi);
console.log("the sum of", sumNegitive)