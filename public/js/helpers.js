// browser side helpers go here

document.addEventListener("DOMContentLoaded", () => {
  function editToggle() {
    const sideBarCells = document.querySelectorAll(".editIconButton");

    sideBarCells.forEach((element) => {
      element.addEventListener("click", () => {
        console.log(element);
      });
    });
  }

  function toggleDetailsElements() {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details) => {
      details.addEventListener("click", (e) => {
        if (e.target === details) {
          return;
        }

        // Close all other details elements if the click was outside
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details && otherDetails.hasAttribute("open")) {
            otherDetails.removeAttribute("open");
          }
        });
      });
    });

    // Add a global click listener to close all if clicking outside any details element
    document.addEventListener("click", (e) => {
      if (e.target.closest("details") === null) {
        detailsElements.forEach((details) => {
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          }
        });
      }
    });
  }

  toggleDetailsElements();
  editToggle();
});
