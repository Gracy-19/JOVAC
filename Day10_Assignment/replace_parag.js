window.onload = () => {
  const oldParagraph = document.getElementById("old-paragraph");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This paragraph was replaced!";
  newParagraph.id = "old-paragraph"; // Keep the same ID if needed

  oldParagraph.replaceWith(newParagraph);
};