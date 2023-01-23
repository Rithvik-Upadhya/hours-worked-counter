let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
}

function save() {
    let countStr = " + " + count
    console.log(saveEl.textContent.trim().length = 0)
    if (saveEl.textContent.trim().length == 0) {
        saveEl.textContent = " : " + count
    } else if (saveEl.textContent.trim().length > 20) {
        saveEl.textContent = " : " + total
        totalEl.textContent = ""
    } else {
        saveEl.textContent += countStr
        totalEl.textContent = " = " + total
    }
    countEl.textContent = 0
    count = 0
}
