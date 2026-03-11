let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach(page => page.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

 const observer = new MutationObserver(() => {
  const logo = document.querySelector(".logo");
  if (logo) {
    setInterval(() => {
      logo.classList.toggle("gold-sparkle");
    }, 600);
    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
