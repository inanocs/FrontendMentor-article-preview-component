window.addEventListener("load", () => {
  const button = document.getElementById("share-button");
  const socialLinks = document.getElementById("social-links");
  const card = document.getElementById("card");
  button.addEventListener("click", (e) => {
    socialLinks.classList.toggle("social__links--active");
    button.classList.toggle("social-card__share-button--active");
    button.firstElementChild.firstElementChild.classList.toggle(
      "social-card__share-img--active"
    );

    if (window.screen.availWidth >= 700) {
      const buttonPosition = button.getBoundingClientRect();
      const cardPosition = card.getBoundingClientRect();
      const socialLinksRect = socialLinks.getBoundingClientRect();

      const positionX =
        buttonPosition.x - cardPosition.x - 125 + buttonPosition.width / 2;
      socialLinks.style.left = `${positionX}px`;

      const positionY =
        buttonPosition.y - cardPosition.y - 30 - cardPosition.height / 2;
      socialLinks.style.bottom = `${positionY}px`;
    } else {
      socialLinks.style.left = 0;
      socialLinks.style.bottom = 0;
    }
  });
});
