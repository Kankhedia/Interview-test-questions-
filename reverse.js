let check =(str)=>{
    let pat=/[a-zA-Z]/igm;
    if(str.match(pat)){
        return true;
 }
    else{
        return false;
    }
}

let r =(str) =>{
    let arr = str.split('');
    let l=0;
    let r = arr.length-1;
     while(l<r){
         if(!check(arr[l])){
             l++;
         }
         else if (!check(arr[r]))
         {
              r--;
         }
         else {
             let temp = arr[l];
             arr[l]=arr[r];
             arr[r]=temp;
             l++;
             r--;
         }
     }

     return(arr.join(''));
}
 
console.log(r("he3llo6wor4ld"));


const users =[

    { firstName:"Vijay ", lastName : "Kankhedia", age : 24},
    { firstName:"Virat ", lastName : "Kohli", age : 32},
    { firstName:"Megan ", lastName : "fox", age : 28},
    { firstName:"Virat ", lastName : "Sharma", age : 38},

];

const output =  users.reduce(function (acc,curr){
    if(curr.age > 30 ){
         let x = curr.age + " "+curr.firstName;
         acc=x;
         
    }
    return acc;
    
         
} ,{});
console.log(output);