const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", () => {
  if (
    Number(textInput.getAttribute("data-length")) === textInput.value.length
  ) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
