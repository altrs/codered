//POPUPPOPUPPOPUPPOPUPPOPUPPOPUPPOPUPPOPUPPOPUPPOPUP

setTimeout(function() {
  document.getElementById("popup").classList.remove("hidden");
}, 2000);

document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").classList.add("hidden");
});
