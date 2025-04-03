// browser side helpers go here

document.addEventListener("DOMContentLoaded",
  () => {
  
    function editToggle() {
      const sideBarCells = document.querySelectorAll('.editIconButton');


      sideBarCells.forEach(element => {
        element.addEventListener('click', () => {
          console.log(element);
        })
      });
    
    };

    editToggle();

  });