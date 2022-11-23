alert("Task#4")

var a = prompt("First num:", "")
var b = prompt("Second num:", "")
var op = prompt("Enter op:", "")


function calc(a, b, op){
    switch(parseInt(op)) {
        case 1:
            return parseInt(a)-parseInt(b);
            break;
        case 2:
            return parseInt(a)*parseInt(b);
            break;
        case 3:
            return parseInt(a)/parseInt(b);
            break;
        default:
            return parseInt(a)+parseInt(b);            
    }
}


alert(calc(a, b, op))