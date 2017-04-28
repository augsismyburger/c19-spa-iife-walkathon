"use strict"

var Donor = (function (oldDonor) {
    let donorArray = [];

    oldDonor.donateIt = function(donationObject) {
        donorArray.push(donationObject)
        return donorArray;
    }

    return oldDonor
})(Donor || {});
