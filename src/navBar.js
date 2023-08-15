import tabChange from "./tabChange"
import asideSec from "./pages/asideSec"
import mainSec from "./pages/mainSec"
import productspage from "./pages/productspage"
import contactpage from "./pages/contactpage"

const links = ["Home", "About", "Products", "Contacts"]
const pages = [mainSec, asideSec, productspage, contactpage]

const navBar = document.createElement('div')
    navBar.id = "menu"
    navBar.style.border = "double purple 2px"
    let list = document.createElement("ul")
    list.classList.add("tab") //testing to see if this needs to go here?
    navBar.appendChild(list)

    for(let i = 0; i<= 3; i++){
        // let listItem = document.createElement("li")
        // listItem.classList.add("menuitem")
        // let tab = document.createElement("button")
        // tab.classList.add("tablinks")
        // let listItem = document.createElement("li")
        // listItem.classList.add("menuitem")
        let tab = document.createElement("li")
        tab.classList.add("tablinks")
        tab.classList.add("menuitem")
        tab.id = pages[i]
        tab.innerHTML = "<a>" + links[i] + "</a>"
        tab.addEventListener("click", function() {tabChange(event, pages[i])})
        // listItem.appendChild(tab)
        // list.appendChild(listItem)
        list.appendChild(tab)
    }

    export default navBar