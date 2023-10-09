let myData=["rohit", "rahul", "Nitin", "Sahil"];
let newEle="Suraj";
let position=2;
for(let i=myData.length-1; i>=position; i--){
myData[i+1]=myData[i]
}
myData[position]=newEle;
console.log(myData)

// insert number;
let data=[12,34,56,78,86];
let newNum=242;
let target=2;
for(let i=data.length-1; i>=target; i--){
   data[i+1]=data[i]
}
data[target]=newNum;
console.log(data);

// Insert a value end of array

let lastInsert=[23,45,67,23,89];
let insetNum=265;
let position1=lastInsert.length;
for(let i=lastInsert.length-1; i >=position1; i--){
    lastInsert[i+1]=lastInsert[i]
}
lastInsert[position1]=insetNum
console.log(lastInsert)
