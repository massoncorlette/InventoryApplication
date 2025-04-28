// browser side helpers go here


// for toggling elements clicking outside of element
document.addEventListener("DOMContentLoaded", () => {

  function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
  }
  
  document.querySelector('#theme-btn').addEventListener('click', setTheme);

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
    document.querySelectorAll('.sidebarDetails').forEach(detail => {
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

    document.querySelectorAll('.addDataToggle').forEach(detail => {
      const icon = detail.querySelector('summary img.addIcon');
    
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          icon.src = '/cancel.svg';
          icon.alt = 'Close';
        } else {
          icon.src = '/addcircle.png';
          icon.alt = 'Add';
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
