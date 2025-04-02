let bill = 0
let tippercentage = 0
let numberOfpeople = 0
let buttonSelected = null

function receivebillvalue() {
    bill = document.querySelector("#bill").valueasnumber

}

function receivenumberofvalue() {
    numberOfpeople = document.querySelector("#people").valueasnumber
}

function receivetippercentagevalue(value) {
    tippercentage = value / 100

    if(buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector("#button-${value}")
    buttonSelected.classList.add("button-selected")
}

function receivecustomtipporcentagevalue() {
    tippercentage = document.querySelector("#custom-tip").valueasnumber
}

function removeClassButtonSelected() {
    if(buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}