const cross = document.getElementById(`nav-close-button`)
const hamburger = document.getElementById(`hamburger`)
const menu = document.getElementById(`menu`)
const checkbox = document.getElementById(`nav-toggle`)
const disable = document.getElementById(`menu-disable`)

checkbox.addEventListener(`change`, () => {

    if(checkbox.checked == true) {
        
        setTimeout(() => {

            menu.style.right = "0"
            disable.style.width = "100%"
    
        }, 300)
        
    } else {

        menu.style.right = "-25rem"
        disable.style.width = "0"
    }
})

disable.addEventListener(`click`, (e) => {

    e.preventDefault(true)
    menu.style.right = "-25rem";
    disable.style.width = "0"
    checkbox.checked = false
})