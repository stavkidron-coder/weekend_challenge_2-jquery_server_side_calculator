console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('Hello from jq');
    getEquationData();
    getTotal();
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
        console.log(response[0].total); // index of 0 will change!!
    }).catch(function(error){
        alert(error);
    });
}

function appendToDomHistory(array){
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        $('#displayHistory').append(`
            <li>${array[i].num1} ${array[i].operator} ${array[i].num2} = ${array[i].total}</li>
        `)
    }
    
}

function appendToDomTotal(array){
    for (let i = 0; i < array.length; i++) {
        $('#displayTotal').empty();
        $('#displayTotal').append(`
            <h2>${array[i].total}</h2>
        `)
    }
    
}
