const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwdL5PrpTY9EfG--4FuzmoPWHwxd4VMpURpz--SXdlZRtG5u_f-_uJCJeUSVKJ0r0jrzA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
