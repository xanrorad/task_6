alert("Task#5")
        

var k = prompt("Enter k:","")
var n = prompt("Enter n:","")

function digitN(k, n){
    for(var i = 1;i<=n;i++){
        k /= 10;
        if(k != 0 ) {
            return k%10
        }else {
            return -1;
        }
    }
}

alert("DigitN: " + digitN(k, n))