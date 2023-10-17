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

// // find max value

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

// // remove dulicate
// let myData=[1,2,3,45,55,55,7,77,77];
// let unique=[];
// for(let i=0; i<myData.length; i++){
//     let element=myData[i];
//     let duplicate=false;
//     for(let j=0; j<unique.length; j++){
//         if(element===unique[j]){
//             duplicate=true;
//             break;
//         }
//     }
//     if(!duplicate){
//         unique[unique.length]=element
//     }
// }
// console.log(unique)
// find second largest

// let myData=[1,2,3,45,6775,4];
// let first=-Infinity;
// let second=-Infinity;
// for(let i=0; i<myData.length; i++){
//     if(myData[i] > first){
//         second=first
//         first=myData[i];
//     }else if(myData[i] > second && myData[i] !== first){
//         second=myData[i]
//     }
// }

// console.log(second);
// console.log(first)

// //insert beging of array

// let myData=[12,33,41,44,4];
// let neItwm=23;
// myData.unshift(neItwm);
// console.log(myData)

// insert end of the array

// let data=[2,3,4,56,7];
// let newData=232;
// data.push(newData)
// console.log(data)

// insert specific  index value

let data=[2,3,4,5,6,7];
let element=23;
data.splice(2,0,element);
console.log(data)





// //sum of zero first pairs






// let data=[-5,-3,-2,-1, 0,2,3,4,8];
// function paireZero(array){
//     for(let number of array){
//      for(let j=1; j<array.length; j++){
//          if(number + array[j]===0){
//              return [number, array[j]]
//          }
//      }
//     }
// }
// let results= paireZero(data);
// console.log(results);


