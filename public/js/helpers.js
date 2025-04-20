// browser side helpers go here


// for toggling elements clicking outside of element
document.addEventListener("DOMContentLoaded", () => {

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

  function toggleDetailsSummaryImg() {
    document.querySelectorAll('details').forEach(detail => {
      const icon = detail.querySelector('summary img.editIcon');
    
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          icon.src = '/cancel.svg';
          icon.alt = 'Close';
        } else {
          icon.src = '/editpen.svg';
          icon.alt = 'Edit';
        }
      });
    });
  }

  document.querySelectorAll('details').forEach(detail => {
    const icon = detail.querySelector('summary img.editIcon');
  
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        icon.src = '/closepen.svg';
      } else {
        icon.src = '/editpen.svg';
      }
    });
  });

  toggleDetailsElements();
  toggleDetailsSummaryImg();
});
