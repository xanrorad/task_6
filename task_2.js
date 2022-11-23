
alert("Task#2")
var arr = Array(3)
for(var i = 0; i<3; i++){
    arr[i] = prompt("Enter num:", "")
}

function min(a){
    var temp = 0
    for(var i = 0; i<3;i++){
        if(temp<a[i]){
            temp=a[i]
        }
    }
    return temp;
}
alert("Max num:" + min(arr))

