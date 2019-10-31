var buttonTop = 0;
var thebutton = document.querySelector('.firstbox');

var student = {name: "Bob", lastName: "Doe", grade:}
var studentname = student.name;

button
console.log('hello world');


document.onkeydown = function(event){
    switch (event.keyCode){
        case 37:
            buttonleft = buttonleft-4;
        break;
        case 39:
                buttonleft = buttonleft+4;
        break;
}
    
    thebutton.style.left = buttonleft + 'px';

    window.localStorage.setItem("xposition", buttonleft);
}

    function dropdown(){
        //alert("clicked button");
        document.getElementById ('menudropdown')

        variable.classList.toggle("show");

}


function frame(){
    buttonTop +=2;
    console.log(buttonTop);
    var theButton = document.querySelector('.button');
    theButton.style.top = buttonTop + 'px';

    if (buttonTop == 700){
        console.log("hello again world ");
        clearInterval(clock);
    }
    else{
        console.log("false");
    }
}


var clock = setInterval(frame,10);