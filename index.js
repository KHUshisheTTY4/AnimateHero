// GSAP animations for hover effect to show only the hovered image
document.querySelectorAll(".image-layer").forEach((layer) => {
  layer.addEventListener("mouseenter", () => {
    // Make other images fully invisible
    gsap.to(".image-layer", { opacity: 0, duration: 0.2 });
    gsap.to(layer, { opacity: 1, duration: 0.5, zIndex: 3 }); // Keep hovered image fully visible and bring it to the front
    gsap.to(".hero-text", { opacity: 0.2, duration: 0.1 }); // Fade the text outline
    gsap.to(layer.querySelector(".overlay-content"), {
      opacity: 1,
      duration: 0.3,
    }); // Hide overlay content
    // Set text stroke and color for hover effect
    const heroText = document.querySelector(".hero-text");
    heroText.style.webkitTextStroke = "0.5px white";
    heroText.style.color = "transparent";
  });

  layer.addEventListener("mouseleave", () => {
    // Restore all images to fully visible
    gsap.to(".image-layer", { opacity: 1, duration: 0.1 });
    gsap.to(".hero-text", { opacity: 1, duration: 0.1 }); // Restore text outline to full opacity
    gsap.to(layer, { opacity: 1, duration: 0.1, zIndex: 1 });
    // Reset the text stroke to none
    const heroText = document.querySelector(".hero-text");
    heroText.style.webkitTextStroke = "none";
    heroText.style.color = "white";

    gsap.to(layer.querySelector(".overlay-content"), {
      opacity: 0,
      duration: 0.3,
    }); // Hide overlay content
  });
});