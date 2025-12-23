const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwbN_hyH5KxxeLDhzcrqAgPyFct6lFaI-Crj9-_edXEsq1KyafoaboJqV9D3zpcHVe4ZQ/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
