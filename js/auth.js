const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxy7_wydKwrcoOTNI1uJKRvS0TKB_ed5eOJ2e0Sqlabm79YUlmMp0B1Wl9qlqHCJ7MQhg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
