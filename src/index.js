import "./style.css"
import printMe from "./print.js"
import header from "./header.js"
import navBar from "./navBar.js"
import footer from "./footer"
import homepage from "./pages/mainSec"
import asideSec from "./pages/asideSec"
import productspage from "./pages/productspage"
import contactpage from "./pages/contactpage"
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


    element.append(header, navBar, homepage, asideSec, productspage, contactpage, footer)
    // contentArea.append(homepage, asideSec, productspage, contactpage)

    return element

}

document.body.appendChild(webPage());