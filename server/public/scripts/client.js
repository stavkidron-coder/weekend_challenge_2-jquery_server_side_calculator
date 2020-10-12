console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('Hello from jq');
    getEquationData();
    getTotal();
    $('#submit').on('click', submitInfo);
    $('#addBtn').on('click', opSelector);
    $('#subtractBtn').on('click', opSelector);
    $('#multiplyBtn').on('click', opSelector);
    $('#divideBtn').on('click', opSelector);
    $('#clear').on('click', clear);
}

function getEquationData(){
    // get equation data
    $.ajax({
        method: 'GET',
        url: '/equationArrayData'
    }).then(function(response) {
        appendToDomHistory(response);
        console.log(response);   
    }).catch(function(error){
        alert(error);
    });
}

function getTotal(){
    //get total from equations
    $.ajax({
        method: 'GET',
        url: '/total'
    }).then(function(response){
        appendToDomTotal(response);
    }).catch(function(error){
        alert(error);
    });
}

function appendToDomHistory(array){
    $('#displayHistory').empty();
    for (let i = 0; i < array.length; i++) {
        $('#displayHistory').append(`
            <li>${array[i].num1} ${array[i].operator} ${array[i].num2} = ${array[i].total}</li>
        `)
    } 
}

function appendToDomTotal(array){
    $('#displayTotal').empty();
    for (let i = 0; i < array.length; i++) {
        $('#displayTotal').append(`
            <h2>${array[i].total}</h2>
        `)
    }
}

function submitInfo(){
    $.ajax({
        method: 'POST',
        url: '/submitData',
        data: {
            num1: $('#firstNumber').val(),
            num2: $('#secondNumber').val(),
            operator: operator
        }
    }).then(function(response){
        // clear inputs
        $('#firstNumber').val('');
        $('#secondNumber').val('');
        console.log(response);
        // perform get request to get the updated array
        getEquationData();
    }).catch(function(error){
        alert(error);
    });
}

let operator = "";

function opSelector(){ // checks which operator was selected and assigns it to an operator variable

    if($('#addBtn').is(':checked')){
        operator = "+";
    }
    else if($('#subtractBtn').is(':checked')){
        operator = "-";
    }
    else if($('#multiplyBtn').is(':checked')){
        operator = "*";
    }
    else if($('#divideBtn').is(':checked')){
        operator = "/";
    }
}

function clear(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}