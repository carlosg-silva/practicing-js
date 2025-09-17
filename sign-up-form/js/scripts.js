const nameInput = document.getElementById("name");

nameInput.addEventListener("blur", function () {
  const firstName = nameInput.value;
  console.log(firstName);
});
