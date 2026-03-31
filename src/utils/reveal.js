const reveal = () => {
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY + window.innerHeight / 2;
    if (scrollTop >= document.getElementById("bannerType").offsetTop) {
      document.querySelector(".banner_inner").classList.add("active");
    }
  });
};

export default reveal;
