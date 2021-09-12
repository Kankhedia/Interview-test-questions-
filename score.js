function score (){
    var points =0;
    var reg = /\d+/g;
    var str='There are 30 days in a month and 12 months in a year Twenty-four';
    
     var result = str.match(reg);
     var x= result.length; 
     Numre= x*4; 
     console.log(Numre);
     var res=str.split(" "),i;
        for (i =0;i<=res.length-1;i++){
       var a=  res[i];
       if (a.length ==5){
          points++;
          console.log(a);
        }
        else if (a.length > 7){
            console.log(a);
            points=points+3;

        }
    }
        
      FinalScore =Numre+points;
      console.log(FinalScore);

}

score();
