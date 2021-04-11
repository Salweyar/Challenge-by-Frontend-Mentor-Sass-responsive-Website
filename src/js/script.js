const submenu1 = document.querySelectorAll(".submenu1");
const submenu2 = document.querySelectorAll(".submenu2");
const submenu3 = document.querySelectorAll(".submenu3");
const img = document.querySelectorAll(".img");

//toogle the Product dropdown when click
Product = () => {
  submenu1[0].classList.toggle("show");
  img[0].classList.toggle("rotate");
};

//toogle the Company dropdown when click
Company = () => {
  submenu2[0].classList.toggle("show");
  img[1].classList.toggle("rotate");
};

//toogle the Connect dropdown when click
Connect = () => {
  submenu3[0].classList.toggle("show");
  img[2].classList.toggle("rotate");
};

// Close the dropdown when click anywhere else in the window
window.onclick = function (event) {
  // Target specific to Product dropdown
  if (!event.target.matches(".dropdown1")) {
    var dropdownsArray = [];
    dropdownsArray.push(document.getElementsByClassName("submenu1"));
    for (i = 0; i < dropdownsArray.length; i++) {
      var openDropdown = dropdownsArray[i];
      if (openDropdown[i].classList.contains("show")) {
        openDropdown[i].classList.remove("show");
      }
    }
  }

  // Target specific to Company dropdown
  if (!event.target.matches(".dropdown2")) {
    var dropdownsArray = [];
    dropdownsArray.push(document.getElementsByClassName("submenu2"));
    for (i = 0; i < dropdownsArray.length; i++) {
      var openDropdown = dropdownsArray[i];
      if (openDropdown[i].classList.contains("show")) {
        openDropdown[i].classList.remove("show");
      }
    }
  }

  // Target specific to Connect dropdown
  if (!event.target.matches(".dropdown3")) {
    var dropdownsArray = [];
    dropdownsArray.push(document.getElementsByClassName("submenu3"));
    for (i = 0; i < dropdownsArray.length; i++) {
      var openDropdown = dropdownsArray[i];
      if (openDropdown[i].classList.contains("show")) {
        openDropdown[i].classList.remove("show");
      }
    }
  }
};
