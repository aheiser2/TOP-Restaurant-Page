
const links = ["Home", "About", "Products", "Contacts"]

const navBar = document.createElement('div')
    navBar.id = "menu"
    // navBar.style.backgroundColor = "green"
    navBar.style.border = "double purple 2px"
    let list = document.createElement("ul")
    navBar.appendChild(list)

    for(let i = 0; i<= 3; i++){
        let tab = document.createElement("li")
        tab.id = i
        tab.classList.add("menuitem")
        tab.style.backgroundColor = "purple"
        tab.style.height = "10px"
        tab.style.width = "150px"
        // tab.innerHTML = links[i]
        let anchor = document.createElement('a')
        tab.appendChild(anchor)
        anchor.innerHTML = links[i]
        anchor.href = links[i]
        list.appendChild(tab)
    }

    // document.getElementById("0").style.backgroundColor = "white"


    //li class="menuitem"><a href="#">Home</a></li>
    export default navBar