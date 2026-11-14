
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close the mobile menu after selecting a link

const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==============================
// ENQUIRY FORM
// ==============================

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get visitor information

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const room = document.getElementById("room").value;
    const message = document.getElementById("message").value;

    // Hostel WhatsApp number
    // Replace with the real number in international format.

    const hostelNumber = "254700123456";

    // Prepare the enquiry message

    const whatsappMessage =
        "Hello 3 Star Hostel!\n\n" +
        "I would like to make an enquiry.\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Room: " + room + "\n" +
        "Message: " + message;

    // Encode message for WhatsApp

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp

    const whatsappURL =
        "https://wa.me/" + hostelNumber +
        "?text=" + encodedMessage;

    window.open(whatsappURL, "_blank");

});
