
var data1 = [2,5,7,1,4,9,0,3];
function soft(data){
    var isChange = false;
    for(var i=0;i<data.length;i++){    
        for(var j = i+1;j<data.length;j++){
            if(data[j]>data[i]){
                var temp = data[i];
                data[i] = data[j];
                data[j] = temp;
                isChange = true;
            }
        }
        if(!isChange)break;
    }
}
soft(data1);
console.log("result",data1);