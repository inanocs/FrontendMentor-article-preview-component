window.addEventListener("load", () => {
  const button = document.getElementById("share-button");
  const socialLinks = document.getElementById("social-links");

  button.addEventListener("click", () => {
    socialLinks.classList.toggle("social__links--active");
    button.classList.toggle("social-card__share-button--active");
    button.firstElementChild.firstElementChild.classList.toggle(
      "social-card__share-img--active"
    );
  });
});
