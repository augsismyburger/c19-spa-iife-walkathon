"use strict"

let submitButton = document.getElementById("donate-button");
let cancelButton = document.getElementById("cancel-button");

submitButton.addEventListener("click", sendDonorOb);
cancelButton.addEventListener("click", clearForm);

function sendDonorOb(event) {
    Donor.donateIt();
}

function clearForm(event) {
    Donor.clearIt();
}
