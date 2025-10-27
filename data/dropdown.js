
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("profileDropdown");
  if (!dropdown) return;

  const toggle = dropdown.querySelector(".picture");
  const content = dropdown.querySelector(".dropdown-content");


  toggle.addEventListener("click", function (event) {
    event.stopPropagation(); 
    content.style.display = content.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function () {
    content.style.display = "none";
  });
});