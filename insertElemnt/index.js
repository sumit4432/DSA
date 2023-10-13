// let myData=["rohit", "rahul", "Nitin", "Sahil"];
// let newEle="Suraj";
// let position=2;
// for(let i=myData.length-1; i>=position; i--){
// myData[i+1]=myData[i]
// }
// myData[position]=newEle;
// console.log(myData)

// // insert number;
// let data=[12,34,56,78,86];
// let newNum=242;
// let target=2;
// for(let i=data.length-1; i>=target; i--){
//    data[i+1]=data[i]
// }
// data[target]=newNum;
// console.log(data);

// // Insert a value end of array

// let lastInsert=[23,45,67,23,89];
// let insetNum=265;
// let position1=lastInsert.length;
// for(let i=lastInsert.length-1; i >=position1; i--){
//     lastInsert[i+1]=lastInsert[i]
// }
// lastInsert[position1]=insetNum
// console.log(lastInsert)


// insert value of biging of the array

// let data=[12,445,77,89,2];
// let newEle=432;
// let position=0;
// for(let i=data.length-1; i>=position; i--){
//     data[i+1]=data[i]
// };
// data[position]=newEle;
// console.log(data);

// function findMax(arr){
//     if(arr.length===0){
//         return undefined
//     }
//     let max=0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }

// let myData=[1,2,34,3,566];
// let res=findMax(myData)
// console.log(res)


let myData=[1,2,3,45,55,55,7,77,77];
let unique=[];
for(let i=0; i<myData.length; i++){
    let element=myData[i];
    let duplicate=false;
    for(let j=0; j<unique.length; j++){
        if(element===unique[j]){
            duplicate=true;
            break;
        }
    }
    if(!duplicate){
        unique[unique.length]=element
    }
}
console.log(unique)