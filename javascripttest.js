// Get the game buttons
const gameButtons = document.querySelectorAll(".game-button");

// Listen for the click event on each button
gameButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Get the affiliate link from the button's data-link attribute
    const affiliateLink = this.getAttribute("data-link");
    window.location.href = affiliateLink;
  });
});
