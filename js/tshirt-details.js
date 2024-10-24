// JavaScript for opening and closing the popup
document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.getAttribute("data-popup"); // Get the popup ID from the button
    document.getElementById(popupId).classList.remove("hidden"); // Show the specific popup
  });
});

// Handle close button click for each popup
document.querySelectorAll(".close-popup").forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest('.fixed'); // Find the closest popup
    popup.classList.add("hidden"); // Hide the popup when the close button is clicked
  });
});

// Close popup when clicking outside of the popup
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden"); // Hide the popup if clicking outside
    }
  });
});
