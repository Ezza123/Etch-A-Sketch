





let current_color = 'black';

const border_size = 700;
const default_input = 64;



let Player_input = default_input;
let board_numbers = Player_input * Player_input;

let pieceHeight_1 = (701 / Player_input) - 1;
let pieceHeight_2 = (701 / Player_input);

let columnWidth_1 = (701 / Player_input) - 1;
let columnWidth_2 = (701 / Player_input);


// BOARD 

let board = document.querySelector('.board');

for (let i = 1; i <= Player_input; i++) {   

  if ( i != 1){
    let column = document.createElement("div");
    column.classList.add('column_2');
    column.style.width = columnWidth_1 + 'px';
    board.appendChild(column);
  }else {    
    let column = document.createElement("div");
    column.classList.add('column_1');
    column.style.width = columnWidth_1 + 'px';
    board.appendChild(column);
  };  
};  

for (let i = 1; i <= 2; i++) {

  if (i!= 1){    
    let column = document.querySelectorAll('.column_2')
    column.forEach((column_2) => {
      for (let x = 1; x <= Player_input; x++) {
        if (x != 1) {
          let board_piece = document.createElement("div");
          board_piece.classList.add("board_piece_2");
          board_piece.style.height = pieceHeight_1 + 'px'
        
          column_2.appendChild(board_piece);
        }else {
          let board_piece = document.createElement("div");
          board_piece.classList.add("board_piece_1");
          board_piece.style.height = pieceHeight_1 + 'px'
        
          column_2.appendChild(board_piece);
        };
      };      
   });
  }else { 
    let column = document.querySelector('.column_1')

    for (let x = 1; x <= Player_input; x++) {
      if (x != 1) {
        let board_piece = document.createElement("div");
        board_piece.classList.add("board_piece_2");
        board_piece.style.height = pieceHeight_1 + 'px'
      
        column.appendChild(board_piece);
      }else {
        let board_piece = document.createElement("div");
        board_piece.classList.add("board_piece_1");
        board_piece.style.height = pieceHeight_1 + 'px'
      
        column.appendChild(board_piece);
      };
    };  
  };
};

//////////////////////////////////////////////////////////////////////////

// game functions 

function PlayerInput(Player_input) {
  let input = () => localStorage.getItem('input')

    input = document.getElementById("grid_size").value;
    localStorage.setItem('Player_input', parseInt(input))    
   
    return Player_input     
  }  

 

function colorSquare (e) {
  e.target.style.background = current_color; 
  };

//  

function eventHandler(mouseDown) {    
    
if (mouseDown == true) {  
  let first_in_column = document.querySelectorAll('.board_piece_1');
  let rest_in_column = document.querySelectorAll('.board_piece_2');  first_in_column.forEach((board_piece_1)=> {      
    board_piece_1.addEventListener('mouseenter',  colorSquare)
  });

  rest_in_column.forEach((board_piece_2)=> {      
    board_piece_2.addEventListener('mouseenter',  colorSquare)
  });
} else {
  let first_in_column = document.querySelectorAll('.board_piece_1');
  let rest_in_column = document.querySelectorAll('.board_piece_2');
  
  first_in_column.forEach((board_piece_1)=> {        
      board_piece_1.removeEventListener('mouseenter',  colorSquare)
      rest_in_column.forEach((board_piece_2)=> {      
        board_piece_2.removeEventListener('mouseenter', colorSquare)        
      });
    });
  }; 
};

let is_sketch = false;



function sketch_erase (){ 

  if (is_sketch == 'true'){
    return;
  }else {
   
    let first_in_column = document.querySelectorAll('.board_piece_1');
    let rest_in_column = document.querySelectorAll('.board_piece_2');
    

    first_in_column.forEach((board_piece_1) => {
      board_piece_1.addEventListener('mousedown', colorSquare)
    });
    rest_in_column.forEach((board_piece_2) => {
      board_piece_2.addEventListener('mousedown', colorSquare)
    });
    
    let board = document.querySelector('.board');
    board.addEventListener('mousedown', (e) => {
      mouseDown = true;    
      eventHandler(mouseDown);
    });  
    
    board.addEventListener('mouseup', (e) => {
      mouseDown = false;    
      eventHandler(mouseDown);
    });     
  };
};

// refresh button
let ref_button = document.querySelector('#refresh');
ref_button.addEventListener("click", () => {
  let white_squares_1 = document.querySelectorAll(".board_piece_1");     
  white_squares_1.forEach((board_piece_1) => {
    board_piece_1.style.background = "white"
  });  
  let white_squares_2 = document.querySelectorAll(".board_piece_2");
  white_squares_2.forEach((board_piece_2) => {
    board_piece_2.style.background = "white"
  });  
});





  
  // erase button - mode 
  let erase_button = document.querySelector('#erase');
  erase_button.addEventListener('click', (e) => {
  current_color = 'white';
  is_sketch = false;
  return 
  });
    // Sketch button - mode 
  let sketch_button = document.querySelector('#sketch');
  sketch_button.addEventListener('click', (e) => {
  console.log();
  current_color = 'black';
  is_sketch = true;
  return 
  }); 

  let color_buttons = document.querySelectorAll('.color');
  color_buttons.forEach((color) => {
    color.addEventListener('click', (e) => {
      current_color = e.target.getAttribute("data-color")
      console.log(current_color);    
    });
  });

  sketch_erase ();
  
 




//////////////////////////////////////////////////////////////


