document.querySelectorAll(".image-layer").forEach((layer) => {
  let moveImage;

  layer.addEventListener("mouseenter", () => {
    // hide other images and show their placeholders
    document.querySelectorAll(".image-layer").forEach((imageLayer) => {
      if (imageLayer !== layer) {
        gsap.to(imageLayer.querySelector("img"), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(imageLayer.querySelector(".overlay-content"), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(imageLayer.querySelector(".placeholder"), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
    gsap.to(layer, {
      opacity: 1.5,
      duration: 0.1,
      zIndex: 3,
      ease: "power2.out",
    });
    gsap.to(".hero-text", { opacity: 0.2, duration: 0.3, ease: "power2.out" });
    gsap.to(layer.querySelector(".overlay-content"), {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    const heroText = document.querySelector(".hero-text");
    heroText.style.webkitTextStroke = "0.5px white";
    heroText.style.color = "transparent"; // move the image with the mouse

    moveImage = (e) => {
      const rect = layer.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.75;
      const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.75;

      gsap.to(layer, {
        x: offsetX * 1.5,
        y: offsetY * 1.5,
        duration: 0.1,
      });
    };
    layer.addEventListener("mousemove", moveImage);
  });
  layer.addEventListener("mouseleave", () => {
    // return the current layer to its original position
    gsap.to(layer, {
      x: 0,
      y: 0,
      duration: 0.7,
      zIndex: 1,
      ease: "power2.out",
    }); // hide placeholders and show images that were hidden before
    document.querySelectorAll(".image-layer").forEach((imageLayer) => {
      if (imageLayer !== layer) {
        gsap.to(imageLayer.querySelector("img"), {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        });
        gsap.to(imageLayer.querySelector(".overlay-content"), {
          opacity: 0,
          duration: 0.1,
          ease: "power2.out",
        });
        gsap.to(imageLayer.querySelector(".placeholder"), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }); // check if any layer is still hovered
    const isAnyHovered = [...document.querySelectorAll(".image-layer")].some(
      (imageLayer) => {
        return;
        imageLayer.matches(":hover");
      }
    ); // if no layers are hovered, reset the hero text opacity and images
    if (!isAnyHovered) {
      gsap.to(".hero-text", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      const heroText = document.querySelector(".hero-text");
      heroText.style.color = "white";
      document.querySelectorAll(".image-layer").forEach((imageLayer) => {
        gsap.to(imageLayer.querySelector("img"), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(imageLayer.querySelector(".overlay-content"), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(imageLayer.querySelector(".placeholder"), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
    layer.removeEventListener("mousemove", moveImage); // clean up the event listener
  });
});
