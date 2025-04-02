let bill = 0
let tippercentage = 0
let numberOfpeople = 0
let buttonselected = null

function receivebillvalue() {
    bill = document.querySelector("#bill").valueasnumber

}

function receivenumberofvalue() {
    numberOfpeople = document.querySelector("#people").valueasnumber
}

function receivetippercentagevalue(value) {
    tippercentage = value / 100

    if(buttonselected !== null) {
        buttonselected.classList.remove("button-selected")
    }

    buttonselected = document.querySelector(´#button-${value}´)
    buttonselected.classList.add("button-selected")
}