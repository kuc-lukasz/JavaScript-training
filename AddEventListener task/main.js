const box = document.querySelector('div')
const btnAdd = document.querySelector('.btn-add')
const btnRemove = document.querySelector('.btn-rem')
const btnToogle = document.querySelector('.btn-tgl')

const resetBtn = document.querySelector(".btn-reset")


function addColor () {
    box.classList.add('color')
    }
function removeColor () {
        box.classList.remove('color')
        }
function toogleColor () {
            box.classList.toggle('color')
        }
function changeSize () {
            box.classList.add('size')
}
function changeSize1 () {
    box.classList.remove('size')
}

btnAdd.addEventListener('click', addColor)

btnRemove.addEventListener("click", removeColor)

btnToogle.addEventListener("click", toogleColor)

box.addEventListener("mouseenter", changeSize)

box.addEventListener("mouseleave", changeSize1)


resetBtn.addEventListener('click', function reset() {
    console.log('dziala')
    btnAdd.removeEventListener('click', addColor)
    btnRemove.removeEventListener('click', removeColor)
    btnToogle.removeEventListener("click", toogleColor)
    box.removeEventListener("mouseenter", changeSize)
    box.removeEventListener("mouseleave", changeSize1)
    resetBtn.removeEventListener('click', reset)
})