// JavaScript for Your Restaurant Website

// Form Validation for Contact Us
document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const name = document.querySelector("#contact-name").value;
    const email = document.querySelector("#contact-email").value;
    const message = document.querySelector("#contact-message").value;

    if (name && email && message) {
        // You can add AJAX or other methods to send data to the server
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all fields.");
    }
});

// Image Slider for Specialties Section
let currentSlide = 0;
const specialtySlides = document.querySelectorAll(".specialty-slide");
const totalSlides = specialtySlides.length;

function showSlide(n) {
    specialtySlides[currentSlide].style.display = "none";
    currentSlide = (n + totalSlides) % totalSlides;
    specialtySlides[currentSlide].style.display = "block";
}

document.querySelector("#prev-specialty").addEventListener("click", () => showSlide(currentSlide - 1));
document.querySelector("#next-specialty").addEventListener("click", () => showSlide(currentSlide + 1));

// Interactive Map
function initMap() {
    const restaurantLocation = { lat: 12.6392, lng: -8.0029 };
    const map = new google.maps.Map(document.querySelector("#map"), {
        center: restaurantLocation,
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: "AfriFlavor Fusion Restaurant",
    });
}

// You'll need to load the Google Maps API with your API key for the interactive map.

// Additional functionality, animations, or custom features can be added based on your specific requirements.
// Get the "Explore Menu" button
const exploreMenuButton = document.getElementById("explore-menu");

// Get the menu section
const menuSection = document.getElementById("menu");

// Add an event listener to the button
exploreMenuButton.addEventListener("click", () => {
    // Toggle the menu section's visibility
    if (menuSection.style.display === "none" || menuSection.style.display === "") {
        menuSection.style.display = "block";
    } else {
        menuSection.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const foodList = document.querySelectorAll(".food-item");
    const foodImage = document.getElementById("food-image");
    const foodPrice = document.getElementById("food-price");
  
    foodList.forEach((foodItem) => {
      foodItem.addEventListener("click", () => {
        const imageSource = foodItem.getAttribute("data-image");
        const price = foodItem.getAttribute("data-price");
        const foodName = foodItem.textContent;
  
        foodImage.src = imageSource;
        foodImage.alt = foodName;
        foodPrice.textContent = price;
      });
    });
  });
// Get the food list and food details elements
const foodList = document.getElementById("food-list");
const foodImage = document.getElementById("food-image");
const foodPrice = document.getElementById("food-price");
// Add a click event listener to each food item
const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Get data attributes (image and price) for the clicked food item
        const imageSrc = item.getAttribute("data-image");
        const price = item.getAttribute("data-price");

        // Display the food image and price
        foodImage.src = imageSrc;
        foodPrice.textContent = price;

        // Show the food details section
        foodImage.style.display = "block";
        foodPrice.style.display = "block";
    });
});
// Initially, hide the food details section
foodImage.style.display = "none";
foodPrice.style.display = "none";
<script>
    function showConfirmation() {
        // Prevent the form from actually submitting to the server
        event.preventDefault();
        
        // Hide the form section
        document.querySelector('#order').style.display = 'none';

        // Show the confirmation message section
        document.querySelector('#confirmation').style.display = 'block';
    }
</script>
  
// JavaScript for interactive features
// Example: Show a subscribe form on button click

const subscribeButton = document.getElementById('subscribe-btn');

subscribeButton.addEventListener('click', function () {
    // Display your subscribe form logic here
    alert('Subscribe form will appear here.');
});

// Add more JavaScript for your website's functionality
