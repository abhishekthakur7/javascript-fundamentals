'use strict';

function showMessage(){
    alert('XSS BOIII');
}

function variableTask(){
    let name = "John";
    let admin;
    admin = name;
    alert(admin);
}