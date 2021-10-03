const e = require("express");

// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");
    }



    window.addEventListener("load", Start);

})();

// alert message on submission
function clicked() {
    return confirm("Successfully Submitted");
}

