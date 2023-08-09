import tabChange from "./tabChange"
import asideSec from "./pages/asideSec"
import mainSec from "./pages/mainSec"
import productspage from "./pages/productspage"
import contactpage from "./pages/contactpage"

const links = ["Home", "About", "Products", "Contacts"]
const pages = [mainSec, asideSec, productspage, contactpage]

const navBar = document.createElement('div')
    navBar.id = "menu"
    // navBar.style.backgroundColor = "green"
    navBar.style.border = "double purple 2px"
    // let list = document.createElement("ul")
    let list = document.createElement("div")
    list.classList.add("tab") //testing to see if this needs to go here?
    navBar.appendChild(list)

    for(let i = 0; i<= 3; i++){
        // let tab = document.createElement("li")
        // // tab.classList.add("tablinks")
        // tab.id = pages[i]
        // tab.classList.add("menuitem")
        // tab.style.backgroundColor = "purple"
        // tab.style.height = "10px"
        // tab.style.width = "150px"
        // let btn = document.createElement('button')
        // tab.appendChild(btn)
        // btn.innerHTML = links[i]
        // btn.classList.add("tablinks")
        // // btn.onclick = tabChange(event, pages[i])
        // btn.addEventListener("click", tabChange(event, links[i]))
        // list.appendChild(tab)
        let tab = document.createElement("button")
        tab.classList.add("tablinks")
        tab.id = pages[i]
        // tab.classList.add("menuitem")
        // tab.style.backgroundColor = "purple"
        // tab.style.height = "10px"
        // tab.style.width = "50px"
        // tab.appendChild(btn)
        tab.innerText = links[i]
        // btn.classList.add("tablinks")
        // btn.onclick = tabChange(event, pages[i])
        tab.addEventListener("click", tabChange(pages[i]))
        list.appendChild(tab)
    }

    // document.getElementById("0").style.backgroundColor = "white"


    //li class="menuitem"><a href="#">Home</a></li>
    export default navBar