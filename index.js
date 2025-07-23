let items = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const ulEl = document.getElementById("ul-el")

btnEl.addEventListener("click", function() {
    items.push(inputEl.value)
    inputEl.value = ""
    renderItems()
})


function renderItems() {
    let itemsList = ""
    for (let i = 0; i < items.length; i++) {
        itemsList += 
        `<li>
            <a target=_blank href='${items[i]}'>
                ${items[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = itemsList
}
