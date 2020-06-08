"use strict";

var value = document.getElementById("val1");
var result = 0;

document.getElementById("answer").innerHTML = result;


function clicked() {
    var input_value = document.getElementById('val1').value;
    document.getElementById('test').innerHTML = input_value;
};

document.getElementById('btn').addEventListener('click', clicked);

document.getElementById('btn').addEventListener('click', function(){
    console.log('clicked');
});