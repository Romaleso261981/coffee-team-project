const swiper = new Swiper(".our-gallery-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});

const closeButton = document.getElementById("close");
const openButton = document.getElementById("burger");
const nobMenu = document.getElementById("mobile");

const orderModal = document.getElementById("orderModal");
const orderModalOpen = document.getElementById("order-modal-open");
const orderModalClose = document.getElementById("hero-area__close");
const btnSubmit = document.getElementById("hero-area__submit");

const msg = document.getElementById("textarea");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// toggle card function
const toggleCard = function ({ card, classList }) {
  card.classList.toggle(classList);
};

// function for sending message into telegram

const sendMessage = async (message) => {
  try {
    const URL = `https://api.telegram.org/bot7077738581:AAEqoAWJvox6ouc6foEcZNLTNWO6N8MSaNw/sendMessage?chat_id=-1001682516809&text=${message}`;
    await fetch(URL);
  } catch (e) {
    console.log(e);
  }
};

// order modal

orderModalOpen.addEventListener("click", () => {
  toggleCard({ card: orderModal, classList: "show" });
});

orderModalClose.addEventListener("click", () => {
  toggleCard({ card: orderModal, classList: "show" });
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const message = `email: ${email.value}  phone: ${phone.value} message: ${msg.value}`;
  sendMessage(message);
  (email.value = ""), (msg.value = ""), (phone.value = "");
  toggleCard({ card: orderModal, classList: "show" });
});

// mob menu modal

openButton.addEventListener("click", () => {
  toggleCard({ card: nobMenu, classList: "open" });
});

closeButton.addEventListener("click", () => {
  toggleCard({ card: nobMenu, classList: "open" });
});

// our-best-offer

const openBtn1 = document.getElementById("card--detail-1");
const openBtn2 = document.getElementById("card--detail-2");
const openBtn3 = document.getElementById("card--detail-3");

const closeBtn1 = document.getElementById("card--detail-1__close");
const closeBtn2 = document.getElementById("card--detail-2__close");
const closeBtn3 = document.getElementById("card--detail-3__close");

const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");

openBtn1.addEventListener("click", () => {
  toggleCard({ card: card1, classList: "show-card" });
});

closeBtn1.addEventListener("click", () => {
  toggleCard({ card: card1, classList: "show-card" });
});

openBtn2.addEventListener("click", () => {
  toggleCard({ card: card2, classList: "show-card" });
});

closeBtn2.addEventListener("click", () => {
  toggleCard({ card: card2, classList: "show-card" });
});
openBtn3.addEventListener("click", () => {
  toggleCard({ card: card3, classList: "show-card" });
});

closeBtn3.addEventListener("click", () => {
  toggleCard({ card: card3, classList: "show-card" });
});
