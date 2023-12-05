function myfunction() {
  let dropdown = document.getElementById("dropdown-content");
  dropdown.classList.toggle("live");
  gsap.from(".nav-items", {
    x: 100,
    duration: 1,
  });
}

function close_sidebar() {
  document.getElementById("overlay-sidebar").classList.add("d-none");
}

function open_sidebar() {
  document.getElementById("overlay-sidebar").classList.remove("d-none");
}

function changeTab(element, tabId) {
  document.querySelectorAll(".nav-link").forEach((tab) => {
    tab.classList.remove("active");
  });
  element.classList.add("active");
}
