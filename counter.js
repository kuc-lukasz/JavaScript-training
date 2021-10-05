const btnDec = document.querySelector(".minus")
const btnInc = document.querySelector(".plus")
const counterField = document.querySelector('.counter')

let numberfield = 0

btnInc.addEventListener('click', () => {
    numberfield = numberfield + 1;
    counterField.innerText = "Counter: " + numberfield

})

btnDec.addEventListener("click", () =>{ 


if(numberfield > 0) {
    numberfield = numberfield - 1
    counterField.innerText = "Counter: " + numberfield
} else {
    counterField.innerText = "Counter: 0"
}
})