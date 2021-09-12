let check=(str)=>{
    let pat=/[a-zA-z]/igm;
    if(str.match(pat)){
        return true
    }else{
        return false
    }
}

let r=(str)=>{
    let arr=str.split('');
    console.log(arr);
    let l=0;
    let r=arr.length-1;
    console.log(r);
    while(l<r){
        if (!check(arr[l])){
            l++;
        }else if(!check(arr[r])){
            r--;
        }else{
            let tmp=arr[l];
            arr[l]=arr[r];
            arr[r]=tmp;
            l++;
            r--;
        }
    }
 return arr.join('');
}

console.log(r("he3llo6wor4ld"));