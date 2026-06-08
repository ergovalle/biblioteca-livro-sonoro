const filterButtons = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".content-section");
const seeAllButtons = document.querySelectorAll(".see-all");
const pixButton = document.querySelector("#pixButton");
const copyMessage = document.querySelector("#copyMessage");

const pixKey = "canallivrosonoro@gmail.com";

function setActiveButton(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
}

function applyFilter(filter) {
  setActiveButton(filter);

  sections.forEach((section) => {
    const sectionType = section.dataset.section;
    const shouldShow = filter === "Tudo" || sectionType === filter;
    section.classList.toggle("hidden", !shouldShow);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

seeAllButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.show);
  });
});

if (pixButton) {
  pixButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      copyMessage.textContent = "Chave Pix copiada. Obrigado por apoiar o Livro Sonoro.";
    } catch (error) {
      copyMessage.textContent = `Chave Pix: ${pixKey}`;
    }

    setTimeout(() => {
      copyMessage.textContent = "";
    }, 3600);
  });
}
