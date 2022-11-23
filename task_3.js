alert("Task#3")

var a = prompt("Enter num:", "")

function sing(a){
    if(a<0){
        return -1;
    } else if(a == 0){
        return 0;
    } else {
        return 1;
    }
}
alert(sing(a))