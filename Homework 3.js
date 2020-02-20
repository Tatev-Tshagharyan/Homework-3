function sentenceArray(sent,arrWord){                          //ex. 1
   let j=0;
   let i=0   
   let sentArr=sent.split("");
   for(let i=0;i<sentArr.length;i++){
      if(sentArr[i]=="_"){
          sentArr[i]=arrWord[j];
           j++;
      }
   }
   let res=sentArr.join("");
   console.log(res);
   }
   sentenceArray("_, we have a _.",["Houston", "problem"]);
   






                                                                               //Ex. 2
function oddAndEven(arrayMix){ 
let newArr=[];
let i=0;
let j=0;
for(i=0;i<arrayMix.length;i++){
   if(typeof arrayMix[i]=='number'){
      newArr[j]=arrayMix[i];
      j++;
   }
}
 let k=[];
 let c=[];
for(i=0;i<newArr.length;i++){
   if(newArr[i]%2===0){
      k.push(newArr[i]);
   }else if(newArr[i]%2!==0 ){
      c.push(newArr[i]);
    }   
}
  console.log([c+','+k]);

}
oddAndEven([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]); 
   







                                 //ex. 3
function numberString(arrMix){
let number="Numbers:";
let string="String:";
let sum1=0;
let sum2=0; 
 for(let i=0; i<arrMix.length; i++){
    if(typeof arrMix[i]==='number'){
        sum1++;
    }else if(typeof arrMix[i]==='string'){
        sum2++;
    }
     
 }let result=number+sum1+","+string+sum2;
   
  console.log(result);
}

numberString([1,'10','hi',2,3]);








   
 function longestSum(arr){                               //ex. 4
    let max=arr[0].length;
    let min=arr[0].length;

  for(let i=0;i<arr.length;i++){
    if(arr[i].length>max){
          max=arr[i].length;
    }else if(arr[i].length<min){
          min=arr[i].length;
      }
  }
     console.log(max+min);
}
longestSum(["anymore","raven","me","communicate"]);








                                                        //ex. 5
function sum(myArr){
let sum=0;
   for(i=0;i<myArr.length;i++){
      sum=sum+myArr[i];
   }
    console.log(sum);
}
sum([-1,0,1,2]);





                                                                  //ex 6
function newArray(array){
  let res=[];
  for(let i=0; i<array.length-1; i++){
     res.push(array[i]*(array[i+1]));
  }
    console.log(res);
}
newArray([3,7,12,5,20,0]);

