const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzswKioz71XaxeWzMz0ga7VD9xbaxls4M4v0tfP3uUW0cYYIshwRl9XhZWpeAwDfvbC3w/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
