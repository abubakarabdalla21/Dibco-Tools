function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




function mysearchFunction1() {
  document.getElementById("open").classList.toggle("no-display");
  document.getElementById("form").classList.toggle("horizTranslate");
  document.getElementById("close").classList.toggle("horizTranslate");

}

function mysearchFunction2() {
  document.getElementById("form").classList.toggle("no-display");
  document.getElementById("close").classList.toggle("no-display");
  document.getElementById("open").classList.toggle("horizTranslate");

}
