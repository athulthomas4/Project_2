function buttonclick(val){
    document.getElementById("screen").value+=val
}

function cleardisplay(){
    document.getElementById("screen").value=""
}

function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}

function percentage() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value=value/100;
} 

function opposite(){
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value=value*-1;
}
