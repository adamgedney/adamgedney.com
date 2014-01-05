/*
     Name: Adam Gedney
     Date: 8/23/13
 */

(function(){

var bill = document.getElementById('bill-input');
var submitBtn = document.getElementById('submit-button');
var output = document.getElementById('totalBill');
var tipRadios = document.getElementsByName('tipGroup');
var error = document.getElementById('error');
var percent;

//Resets bill input field. Removes check from radio buttons & sets radio default value
destroy();


//Listens for submit button click
submitBtn.addEventListener("click", submitBill, false);

//listens for radio button click
for(var i=0;i<tipRadios.length;i++){
    tipRadios[i].addEventListener("click", submitBill, false);
};

//on submit, function grabs bill input value and radio value
//then it runs the calculate function.
function submitBill(event){

    //clears previous errors
    error.innerHTML = "";

    //DOM input values | bill cast as Number to convert from string
    bill = document.getElementById('bill-input').value;
    tipRadios = document.getElementsByName('tipGroup');

    //regEx pattern for $123.45, 123.45, .4
    var currencyPattern = /^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/;

    //checks user input against regEx
    if(currencyPattern.test(bill)){
        
        //if user included a $ sign, it is substringed out for the calculation
        //to work properly
        if(bill.indexOf("$") == 0){
           bill = bill.substring(1);
            console.log(bill);
        };

        //looks for the currently selected radio button's value,
        //then assigns it to the percent variable
        for(var i=0;i<tipRadios.length;i++){
           
            if(tipRadios[i].checked){
                
                percent = tipRadios[i].value;

            };
        };

        //runs calculation & outputs it to DOM
       output.innerHTML =  "$"+ calculateTip(Number(bill), percent);

    }else{

        error.innerHTML = "Please enter bill amount in this format $123.45";
    };

        
};

//calculates tip
function calculateTip(bill, percent){

    var adjPct = percent / 100;
    var pctTip = bill * adjPct;
    var totalBill = Number(bill + pctTip).toFixed(2);

    //sets the pctTip to display next to the Tip Amount <h2> in DOM
    var tipAmount = document.getElementById('tipAmount');
    tipAmount.innerHTML = "$" + pctTip.toFixed(2);

    return totalBill;
};

function destroy(){

    //resets bill text input field on refresh
    bill.value = "";

    //resets radio button checked on page refresh
    for(var i=0;i<tipRadios.length;i++){
           
            tipRadios[i].checked=false;
        };

        //sets default checked radio button
        tipRadios[3].checked= true;
};

})();