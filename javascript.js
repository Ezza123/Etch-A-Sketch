


//  __ __ __ __
// |__|__|__|__|
// |__|__|__|__|
// |__|__|__|__|
// |__|__|__|__|





// equation for board size per squares in a column: 

//  S =  (width of Sq + width of border) * N - board size in px


 // input space to insert the size of the board as intg. only - if fancy, make an alert to enter the size again 
 // up to 100x100 

 
 // erase mode - mousedown and enter to change bckground col. to white / color mode - function that by default starts with color mode - then after clicking erase - transfers to erase mode ? iguess? 





let N = 16;
let board_numbers = N * N;







// BOARD 

for (let i = 1; i <= board_numbers; i++) { 
  const board = document.querySelector(".board");

  let board_piece = document.createElement("div");
  board_piece.classList.add("board_piece");

  board.appendChild(board_piece);
  
};
////////////////////////////////////////////////



function colorSquares (e) { 
  e.target.style = 'background: black'
}

function eraseSquares (e) {
 e.target.style = 'background: white'
}

let black_squares = document.querySelectorAll('.board_piece'); 



black_squares.forEach((board_piece) =>{
  board_piece.addEventListener("mousedown", (e) => {
    e.target.style = 'background: black';

    black_squares.forEach((board_piece) => {      
      board_piece.addEventListener("mouseenter", colorSquares);                       
    });
  });

  board_piece.addEventListener("mouseup", (e) => {
    
    black_squares.forEach((board_piece) => {
      board_piece.removeEventListener("mouseenter", colorSquares);                       
    });
  }); 
});

let ref_button = document.querySelector('#refresh');

ref_button.addEventListener("click", () => {
    let white_squares = document.querySelectorAll(".board_piece");
    
    
    white_squares.forEach((board_piece) => {
      board_piece.style = "background: white"
    });  
});

// ERASE MODE 

let erase_button = document.querySelector('#erase')

erase_button.addEventListener("click", () => {
  let erase_squares = document.querySelectorAll('.board_piece');

  erase_squares.forEach((board_piece) =>{
    board_piece.addEventListener("mousedown", (e) => {
      e.target.style = 'background: white';
  
      erase_squares.forEach((board_piece) => {      
        board_piece.addEventListener("mouseenter", eraseSquares);                       
      });
    });
  
    board_piece.addEventListener("mouseup", (e) => {
        
      erase_squares.forEach((board_piece) => {
        board_piece.removeEventListener("mouseenter", eraseSquares);                       
      });
    }); 
  });
});


// input 

let input_size = document.querySelector('input')
  






// sketch - squares change to black when its click / click - hold. 



   












