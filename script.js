const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const form = document.querySelector("#bookingForm");
const message = document.querySelector("#formMessage");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const guests = data.get("guests");
  const date = data.get("date");
  const time = data.get("time");

  const link = document.createElement("a");
  link.href = "https://wa.me/2304551736";
  link.textContent = "Confirmer sur WhatsApp";
  message.replaceChildren(
    `Merci ${name}. Votre demande pour ${guests}, le ${date} a ${time}, est prete. `,
    link
  );
  form.reset();
});
