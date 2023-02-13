const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

linkHome.onclick = function (event) {
  event.preventDefault();
  history.pushState(null, "", event.target.href);
  root.textContent = "Welcome to Home Page";
};

linkAbout.onclick = function (event) {
  event.preventDefault();
  history.pushState(null, "", event.target.href);
  root.textContent = "Welcome to About Page";
};

if (window.location.hash == "#home") {
  root.textContent = "Welcome to Home";
} else if (window.location.hash == "#about") {
  root.textContent = "Welcome to About";
} else {
  root.textContent = "Welcome to Home";
}
