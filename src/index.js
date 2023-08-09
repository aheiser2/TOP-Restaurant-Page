import "./style.css"
import printMe from "./print.js"
import header from "./header.js"
import navBar from "./navBar.js"
import footer from "./footer"
import mainSec from "./mainSec"
import asideSec from "./asideSec"
import contentArea from "./contentArea"

console.log("I'm working now!")

function component() {
    const element = document.createElement('div');
 
   const btn = document.createElement('button');
 
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
   btn.innerHTML = 'Click me and check the console!';
 
   btn.onclick = printMe;
 
 
   element.appendChild(btn);
 
 
    return element;
  }
 
  document.body.appendChild(component());

function webPage(){
    const element = document.createElement('div');
    element.id = "container"
    // element.style.backgroundColor = "blue"
    // element.style.height = "500px"
    // element.style.width = "700px"

    // const header = document.createElement('div')
    // header.style.backgroundColor = "pink"
    // header.style.height = "50px"
    // header.style.width = "70px"

    // const navBar = document.createElement('div')
    // navBar.style.backgroundColor = "green"
    // navBar.style.height = "120px"
    // navBar.style.width = "200px"

    // const contentArea = document.createElement('div')
    // contentArea.style.backgroundColor = "black"
    // contentArea.style.height = "250px"
    // contentArea.style.width = "650px"

    // const mainSec = document.createElement('div')
    // mainSec.style.backgroundColor = "orange"
    // mainSec.style.height = "120px"
    // mainSec.style.width = "200px"

    // const asideSec = document.createElement('div')
    // asideSec.style.backgroundColor = "yellow"
    // asideSec.style.height = "120px"
    // asideSec.style.width = "200px"

    // const footer = document.createElement('div')
    // footer.style.backgroundColor = "red"
    // footer.style.height = "120px"
    // footer.style.width = "200px"

    element.append(header, navBar, contentArea, footer)
    contentArea.append(mainSec, asideSec)

    return element

}

document.body.appendChild(webPage());