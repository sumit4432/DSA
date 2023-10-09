let myData=["rohit", "rahul", "Nitin", "Sahil"];
let newEle="Suraj";
let position=2;
for(let i=myData.length-1; i>=position; i--){
myData[i+1]=myData[i]
}
myData[position]=newEle;
console.log(myData)