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

/* ============ Expandable Cards ============ */

/* ========= variables ========= */

const container = document.getElementById(`container`)
const cards = document.getElementById(`cards`)

/* ========= event listeners ========= */

cards.addEventListener(`click`, (e) => {

    const elementID = e.target.id;

    if (elementID == `card-expand-0` || 
        elementID == `card-expand-1` || 
        elementID == `card-expand-2` || 
        elementID == `card-expand-3` ||
        elementID == `card-expand-4`) {

        /* ========= variables ========= */

        const arr   = e.target.id.split("-")
        const id    = parseInt(arr[arr.length - 1])
        const body  = document.getElementById(`body-${id}`)
        const event = document.getElementById(`card-expand-${id}`)
        const dropdown = document.getElementById(`down-${id}`)

        /* ========= enable dropdown ========= */

        if (event.checked == true) {
            
            body.style.height = `auto`;
            dropdown.style.display = `block`

            setTimeout(() => {}, 400)

        } else {
            
            body.style.height = `12rem`
            dropdown.style.display = `none`
        }

        /* ========= disable dropdown ========= */

        dropdown.addEventListener(`click`, () => {

            body.style.height = `12rem`
            dropdown.style.display = `none`
            event.checked = false;
        })
    }
})