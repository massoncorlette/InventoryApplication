// browser side helpers go here


function editToggle(activeDirector, index, ) {

  activeDirector = index;
  console.log(activeDirector);
}

const colors = {
    1: "rgb(255, 99, 132)",
    2: "rgb(54, 162, 235)",
    3: "rgb(255, 206, 86)",
    4: "rgb(75, 192, 192)" 
};



document.addEventListener("DOMContentLoaded",
  () => {
  
    function editToggle() {
      const sideBarCells = document.getElementsByClassName('editIconButton');


      sideBarCells.array.forEach(element => {
        element.addEventListener('click', () => {
          console.log(element);
        })
      });
    
    };

    editToggle();

  });


module.exports = { editToggle, colors}