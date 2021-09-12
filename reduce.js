let a =[8,2,5,5];
 let avg=a.reduce((accum,curr,index,array)=>{
     debugger;
     let total = accum += curr;
     if (index ===array.length-1 ){
     return total/array.length;
     }
     return total;
 })

 console.log(avg);