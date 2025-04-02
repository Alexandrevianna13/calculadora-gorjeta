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

function calculateresults() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let tipAmountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = bill * tipPercentage / numberOfPeople
        tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson
        Strongtotal.innerText = `$${totalPerson.toFixed(2)}`
    }

}

function reset() {
    billInput.value = ""
    bill = 0

    tipPercentage = 0
    removeClassButtonSelected()
    document.querySelector("#custom-tip").value = ""

    numberOfPeopleInput.value = ""
    numberOfPeople = 0

    document.querySelector(".amount strong").innerText = "$0.00"
    document.querySelector(".total strong").innerText = "$0.00"
}