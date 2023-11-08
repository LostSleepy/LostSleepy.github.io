document.addEventListener("DOMContentLoaded", function () {
    var minimenuButton = document.getElementById("minimenu-button");
    var minimenuContent = document.getElementById("minimenu-content");

    minimenuButton.addEventListener("click", function () {
      if (minimenuContent.style.display === "block") {
        minimenuContent.style.display = "none";
      } else {
        minimenuContent.style.display = "block";
      }
    });
  });