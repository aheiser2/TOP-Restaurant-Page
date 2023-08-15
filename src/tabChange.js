import contentArea from "./contentArea";
import asideSec from "./pages/asideSec"
import mainSec from "./pages/mainSec"
import productspage from "./pages/productspage"
import contactpage from "./pages/contactpage"

export default function tabChange(evt, pageName) {
         // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    // contentArea.innerHTML = ""
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pageName.id).style.display = "block";
  // contentArea.append(pageName)
  evt.currentTarget.className += " active";

  console.log(pageName)
  console.log(pageName.id)
  // document.getElementById(pageName.id).style.backgroundColor = "red"
} 
