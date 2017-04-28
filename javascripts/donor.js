"use strict"

var Donor = (function (oldDonor) {

    let tableTarget = document.getElementById('doner-table-target');
    let fName = document.getElementById('first-name');
    let lName = document.getElementById('last-name');
    let donationAmnt = document.getElementById('donation-ammount');
    let donationType = document.getElementsByName('donType');
    // console.log(donationType);
    let donorEmail = document.getElementById('email');
    let donorArray = [];

    function Doner(fName, lName, donationAmnt, donationType, donorEmail) {
        this.firstName = fName;
        this.lastName = lName;
        this.amt = donationAmnt;
        this.donType = donationType;
        this.email = donorEmail;
    }

    oldDonor.donateIt = function(donationObject) {
        for (let i = 0; i < donationType.length; i++) {
            if (donationType[i].checked === true) {
                var donationTypeString = donationType[i].id;
            }
        }
        let name = fName.value + lName.value;
        // console.log(donationType);
        donorArray.push(new Doner(fName.value, lName.value, donationAmnt.value, donationTypeString, donorEmail.value));
        tableTarget.innerHTML = "";
        donorArray.forEach(function(i) {
            tableTarget.innerHTML += `<tr><td>${i.firstName} ${i.lastName}</td><td>$${i.amt}</td><td>${i.donType}</td></tr>`;
        });
        // CLEARING FORM
        fName.value = null;
        lName.value = null;
        donationAmnt.value = null;
        donorEmail.value = null;
        for (let i = 0; i < donationType.length; i++) {
            donationType[i].checked = false;
        }
    }

    oldDonor.clearIt = function(donationObject) {
        // CLEARING FORM
        fName.value = null;
        lName.value = null;
        donationAmnt.value = null;
        donorEmail.value = null;
        for (let i = 0; i < donationType.length; i++) {
            donationType[i].checked = false;
        }
    }
    return oldDonor
})(Donor || {});
