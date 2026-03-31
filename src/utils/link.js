const link = () => {
  document.querySelectorAll(".header_menu ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(li.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

export default link;
