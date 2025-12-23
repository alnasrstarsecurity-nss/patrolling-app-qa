const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZRdLgjv651p2BbSNETRwAnkkilntvfiNor4vzJS034_G3M7_Nf0oMVnE77TfliUcN-A/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
