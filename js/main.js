const parallaxText = (e) => {
  document.querySelectorAll(".text").forEach((text) => {
    let x = (window.innerWidth - e.pageX * 2) / 2;
    text.style.transform = `translateX(${x}px)`;
  });
};

document.addEventListener("mousemove", parallaxText);
