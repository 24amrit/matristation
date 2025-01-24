// Mobile Menu Toggle
document
  .getElementById("mobileMenuToggle")
  .addEventListener("click", function () {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("show");
  });

// for mega menu
function toggleMegaMenu() {
  const megaMenu = document.getElementById('mega-menu');
  megaMenu.classList.toggle('active');
}

document.addEventListener('click', function (e) {
  const megaMenu = document.getElementById('mega-menu');
  if (!megaMenu.contains(e.target) && e.target.closest('.nav-link')?.textContent.trim() !== 'Setting') {
      megaMenu.classList.remove('active');
  }
});

// for search-bar pop up
// Get references to DOM elements
const searchBar = document.getElementById("searchBar");
const popupContainer = document.getElementById("popupContainer");
const clearIcon = document.getElementById("clearIcon");

// Show pop-up and toggle clear icon visibility
searchBar.addEventListener("click", () => popupContainer.style.display = "block");
searchBar.addEventListener("input", () => clearIcon.style.display = searchBar.value.trim() ? "block" : "none");

// Hide pop-up when clicking outside search container
document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-container")) popupContainer.style.display = "none";
});

// Clear input and hide clear icon when clicked
clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.display = "none";
  searchBar.focus();
});

// -------------------------------------------------
// orange line
const menuItems = document.getElementById("menu-items");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const orangeBar = document.getElementById("orange-bar");

const originalContent = menuItems.innerHTML;
const newContent = `
    <span><a href="#">All</a></span>
    <span><a href="">Remarriage</a></span>
    <span><a href="">Hindu</a></span>
    <span><a href="">Muslim</a></span>
    <span><a href="">Christian</a></span>
    <span><a href="">Sikh</a></span>
    <span><a href="">Jain</a></span>
`;

nextBtn.addEventListener("click", () => {
    menuItems.innerHTML = newContent;
    nextBtn.classList.add("d-none");
    prevBtn.classList.remove("d-none");
    orangeBar.classList.add("white"); // Change background color to white
     // Add the following line to change the background color of .orange-bar
     document.querySelector(".prev-button").style.backgroundColor = "black";
});

prevBtn.addEventListener("click", () => {
    menuItems.innerHTML = originalContent;
    prevBtn.classList.add("d-none");
    nextBtn.classList.remove("d-none");
    orangeBar.classList.remove("white"); // Revert background color
     // Add the following line to revert the background color of .orange-bar
     document.querySelector(".next-button").style.backgroundColor = ""; // Or use the original color
});


// ----------------------------------------------------------------
// filter option
const filterContainer = document.getElementById("filterContainer");
const nextBtnFil = document.getElementById("nextBtnFilter");

let atEnd = false;

nextBtnFil.addEventListener("click", () => {
  const scrollAmount = 200;

  if (!atEnd) {
    filterContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      if (
        filterContainer.scrollLeft + filterContainer.clientWidth >=
        filterContainer.scrollWidth
      ) {
        atEnd = true;
        nextBtnFil.innerHTML = "&lt;";
      }
    }, 300);
  } else {
    filterContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      if (filterContainer.scrollLeft === 0) {
        atEnd = false;
        nextBtnFil.innerHTML = "&gt;";
      }
    }, 300);
  }
});

// ----------------------------------------------------------
// categories
const categories = document.querySelectorAll(".category");
const prevBtn1 = document.getElementById("prev-btn1");
const nextBtn1 = document.getElementById("next-btn1");

// Constants
const visibleCount = 6; // Show 6 categories at a time
let startIndex = 0;

// Update visible categories and button states
const updateSlider = () => {
  categories.forEach((category, index) => {
    category.style.display =
      index >= startIndex && index < startIndex + visibleCount
        ? "block"
        : "none";
  });

  // Enable/disable buttons
  prevBtn1.disabled = startIndex === 0;
  nextBtn1.disabled = startIndex + visibleCount >= categories.length;
};

// Navigate to the previous set of categories
prevBtn1.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex -= 1;
    updateSlider();
  }
});

// Navigate to the next set of categories
nextBtn1.addEventListener("click", () => {
  if (startIndex + visibleCount < categories.length) {
    startIndex += 1;
    updateSlider();
  }
});

// Initialize the slider
updateSlider();

// ---------------------------------------------------------------------------------
// explore
function showTab(tab) {
    // Remove active class from all buttons
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    document.getElementById(`${tab}-tab`).classList.add('active');

    // Hide all content sections
    document.querySelectorAll('.filter-content').forEach(content => content.classList.add('d-none'));

    // Show the selected tab content
    document.getElementById(`${tab}-content`).classList.remove('d-none');
}

// -------------------

