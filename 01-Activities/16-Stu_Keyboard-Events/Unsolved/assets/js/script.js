function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").textContent = "KEYDOWN Event";
  const key = event.key.toLowerCase();
  document.querySelector("#key").textContent = event.key;
  
}

function keyupAction(event) {
  document.querySelector("#status").textContent = "KEYUP Event";
  document.querySelector("#code").textContent = event.keyCode;
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
