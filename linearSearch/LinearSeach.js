
function findMax(arr){
    if(arr.length===0){
        return undefined
    };
    let max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
};
let maxNum=[2,3,4,6,778,8];
let maxRes=findMax(maxNum);
console.log(maxRes)


function findMin(arr){
    if(arr.length===0){
        return -1
    };
    let min=arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min
}

let minMun=[23,4,56,67,77,1];
let minRes=findMin(minMun);
console.log(minRes)




function findInd(arr, target){
    if(arr.length===0){
        return -1
    }
    let index=undefined
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
           index=i

        }
    }
return index
}

let myData=[2,3,4,5,6,78,7];
let target=4;
let res=findInd(myData,target)
console.log(`the taget valu is ${target} and his index is ${res}`);

function findFistAccu(arr, target){
    if(arr.length===0){
        return -1
    };
    let index=undefined;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            index=i
            break
        }
    }
    return index
}

let data=[1,2,3,44,4,44,44];
let accuTarget=44
let resAccu=findFistAccu(data, accuTarget);
console.log(resAccu);

function findLastAccuInd(arr, target){
    if(arr.length===0){
        return undefined
    };
    let index=-1
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            index=i
        }
    }
    return index
};

let lastAccu=[2,3,3,4,4,4,5,5,5,55];
let lastAccuIn=5;
let lastAcc=findLastAccuInd(lastAccu,lastAccuIn)
console.log(lastAcc)


function countAllAccu(arr, target){
    if(arr.length===0){
        return -1
    };
    let count=0;
    for (let i=0; i< arr.length; i++){
     if(arr[i]===target){
        count ++
}
    }
    return count
};

let counAccu=[2,3,34,4,4,44,4];
let countALLtarget=4;
let counAcc=countAllAccu(counAccu,countALLtarget)
console.log(counAcc);




let student=[
    {id:1, name:"Sahil", desigination:"fontend Devloper"},
    {id:2, name:"Nitin", desigination:"fontend Devloper"},
    {id:3, name:"Adarsh", desigination:"fontend Devloper"},
    {id:4, name:"Sumit", desigination:"fontend Devloper"},
    {id:5, name:"Sanju", desigination:"fontend Devloper"},
];
let targetName="Sumit"
function FindByName(arr, pro, valu){
    for(let i=0; i<arr.length; i++){
        if(arr[i][pro]===valu){
            return arr[i]
        }
    }
    return -1
}
let findDeatisl=FindByName(student, 'name', targetName);
console.log(findDeatisl);


function findFristAccString(mainString, subString){
    const mainLength=mainString.length;
    const subLength=subString.length;
    for(let i=0; i<=mainLength-subLength; i++){
        let found=true;
        for(let j=0; j<subLength; j++){
            if(mainString[i+j]!==subString[j]){
                found=false;
                break;
            }
        }
        if(found){
            return i
        }
    }
    return -1
};
let myString="hello every one this is JavaScript DSA";
let myString1="JavaScript";
let firstStringResults=findFristAccString(myString, myString1)
if(firstStringResults !== -1){
    console.log(`this is the my string "${myString1}" and his index value is ${firstStringResults}`)
}else{
    console ("string not found")
}




function findFirstAndLastTarget(arr, target){
    function firstEle(arr, target){
        let left=0;
        let right=arr.length-1
        let results=-1
        
        while(left <=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]===target){
                results=mid;
                right=mid-1
            }else if(arr[mid]<target){
                left=mid+1
            }else{
            right=mid-1
            }
        }
        return results 
    };
    function lastEle(arr, target){
        let left=0;
        let right=arr.length-1;
        let results=-1;
        while(left <=right){
            let mid=Math.floor((left +right)/2)
            if(arr[mid]===target){
                results=mid;
                left=mid+1
            }else if(arr[mid]<target){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return results
    };
    let first=firstEle(arr,target);
    let last=lastEle(arr,target);
    return [first, last]
}
let data1=[1,2,3,57,88,88,88]
let target1=88;
let res1=findFirstAndLastTarget(data1,target1);
console.log("this is the target value",res1)