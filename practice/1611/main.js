let myformele = document.getElementById("myForms");

let afterSubmitNameEle= document.getElementById("afterSubmitName");
let afterSubmitPhNumEle= document.getElementById("afterSubmitPhNum");
let afterSubmitEmailEle= document.getElementById("afterSubmitEmail");

let inputNameEle= document.getElementById("inputName");
let inputPhNumEle= document.getElementById("inputPhNum");
let inputMailEle= document.getElementById("inputMail");



myFormEle.addEventListener("submit", function(event){
    event.preventDefault();
    afterSubmitNameEle.textContent= inputNameEle.value;
    afterSubmitPhNumEle.textContent= inputPhNumEle.value;
    afterSubmitEmailEle.textContent= inputMailEle.value;
    });

let buttonEle= document.getElementById("submitButton");