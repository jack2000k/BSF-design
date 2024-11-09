// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Product Hover Animation
document.querySelectorAll(".product").forEach((product) => {
  product.addEventListener("mouseenter", function () {
    this.classList.add("active");
  });
  product.addEventListener("mouseleave", function () {
    this.classList.remove("active");
  });
});

// Journal Entry Hover Animation
document.querySelectorAll(".entry").forEach((entry) => {
  entry.addEventListener("mouseenter", function () {
    this.classList.add("active");
  });
  entry.addEventListener("mouseleave", function () {
    this.classList.remove("active");
  });
});

// Product Filtering
const filterButtons = document.querySelectorAll(".filter-button");
const products = document.querySelectorAll(".product");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const filter = this.dataset.filter;
    products.forEach((product) => {
      if (filter === "all" || product.classList.contains(filter)) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Contact Form Validation
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitButton = document.querySelector("#submit-button");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    nameInput.classList.add("error");
  } else {
    nameInput.classList.remove("error");
  }

  if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }

  if (messageInput.value.trim() === "") {
    isValid = false;
    messageInput.classList.add("error");
  } else {
    messageInput.classList.remove("error");
  }

  if (isValid) {
    contactForm.reset();
    alert("Thank you for your message!");
  }
});

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
