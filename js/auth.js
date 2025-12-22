const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbI60paW0jOGMhjzivfTKwm-CYR8sze5PZ0fmpbSWkzeoLX6NCBfZ8vIAce4ZhSqWfyA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
