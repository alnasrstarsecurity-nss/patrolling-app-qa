const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzCk1RlCy1G6WdE6lFlMub5FjIZUonQx_Jwgyg-vFZlWBiv_ZQO71XvkSdZVpCdXU9Q1A/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
