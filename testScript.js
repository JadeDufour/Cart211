var buttonTop = 0;
console.log('hello world');

function frame(){
    buttonTop +=2;
    console.log(buttonTop);
    var theButton = document.querySelector('.button');
    theButton.style.top = buttonTop + 'px';

    if (buttonTop == 500){
        console.log("hello again world ");
        clearInterval(clock);
    }
    else{
        console.log("false");
    }
}


var clock = setInterval(frame,10);