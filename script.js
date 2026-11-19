const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const themeButton = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
let theme = "dark";

try {
  if (localStorage.getItem("theme") === "light") {
    theme = "light";
  }
} catch (error) {
  console.warn("Could not read the saved theme preference.", error);
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  if (themeButton) {
    themeButton.textContent = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;
  }
  if (themeColor) {
    themeColor.setAttribute("content", theme === "dark" ? "#111511" : "#f4f4eb");
  }
}

if (themeButton) {
  applyTheme();
  themeButton.hidden = false;
  themeButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Could not save the theme preference.", error);
    }
  });
}
