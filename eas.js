const grid = document.querySelector('.grid');

function populateGrid(gridsize) {
    
    let amount = gridsize * gridsize;
    for (let i=0; i < amount; i++) {
        const square = document.createElement('div');
          square.classList.add('square');
          square.addEventListener('mouseover', ()=> 
          square.style.backgroundColor = 'black');
            let gridwidth = grid.style.width = '480px';
          let squaresize = parseInt(gridwidth)/gridsize + 'px';
          console.log(squaresize);
          square.style.width = squaresize;
          square.style.height = squaresize;
          grid.appendChild(square);
      }
}

populateGrid(16);

function changeGridSize(input) {
    if (input >= 4 && input <= 64) {    
    let squares = grid.querySelectorAll('.square');
          squares.forEach((div) => div.remove());
    populateGrid(input);
    }
    else;
}