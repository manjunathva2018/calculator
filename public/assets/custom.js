$(document).ready(function(){
    var matrix=[1,2,8,9,1,4,7,2,12,1,15,0];
    var result=[];
    for(var i=0;i<matrix.length;i++){
       let index=0;
      let num = matrix[index];
   
 if(i<index+3){
    let res= matrix[i+1]+num;
  
    if(res>=10){
        result.push(0)
    }
    else{
       result.push(res);
    }
 }  index=index+3;
    }
  console.log("result=[]",result)
   });