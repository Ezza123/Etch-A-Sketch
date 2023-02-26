// GAME FUCNTIONS 
////////////////////////////////////////////////


// player input - on click in html file.

function PlayerInput(Player_input) {
  let input = () => localStorage.getItem('input')

    input = document.getElementById("grid_size").value
    localStorage.setItem('input', parseInt(input))    

    return Player_input     
  }  

function colorSquares (e){
  e.target.style = 'background: white'
}

function initiateColor_1 (e) { 
  
    e.target.style.background = 'black';

    black_squares_1.forEach((board_piece_1) => {      
      board_piece_1.addEventListener("mouseenter", colorSquares);                       
    });
}

function initiateColor_2 (e) { 
  
  e.target.style.background = 'black';

  black_squares_2.forEach((board_piece_2) => {      
    board_piece_2.addEventListener("mouseenter", colorSquares);                       
  });
};


function eraseSquares (e) {
 e.target.style = 'background: white'
};


function sketch () {

  // color First square in each column 

  let black_squares = document.querySelectorAll('.board_piece_1'); 

  black_squares.forEach((board_piece_1) =>{
    board_piece_1.addEventListener("mousedown", (e) => {
      e.target.style.background = 'black';

      black_squares.forEach((board_piece_1) => {      
        board_piece_1.addEventListener("mouseenter", colorSquares);                       
      });
    });

    board_piece_1.addEventListener("mouseup", (e) => {
      
      black_squares.forEach((board_piece_1) => {
        board_piece_1.removeEventListener("mouseenter", colorSquares);                       
      });
    }); 
  });

  // Color other squares besides first in each column


  let black_squares_2 = document.querySelectorAll('.board_piece_2'); 

  black_squares_2.forEach((board_piece_2) =>{
    board_piece_2.addEventListener("mousedown", (e) => {
      e.target.style.background = 'black';

      black_squares_2.forEach((board_piece_2) => {      
        board_piece_2.addEventListener("mouseenter", colorSquares);                       
      });
    });

    board_piece_2.addEventListener("mouseup", (e) => {
      
      black_squares_2.forEach((board_piece_2) => {
        board_piece_2.removeEventListener("mouseenter", colorSquares);                       
      });
    }); 
  });
};

// ERASE MODE - by pressing Erase - it starts a function with switch statement, if true - function to erase is applied - if false - default skeetch fucntion is applied. 

function erase() {
  let white_squares = document.querySelectorAll('.board_piece_1'); 

  white_squares.forEach((board_piece_1) =>{
    board_piece_1.addEventListener("mousedown", (e) => {
      e.target.style.background = 'white';

      black_squares.forEach((board_piece_1) => {      
        board_piece_1.addEventListener("mouseenter", eraseSquares);                       
      });
    });

    board_piece_1.addEventListener("mouseup", (e) => {      
      black_squares.forEach((board_piece_1) => {
        board_piece_1.removeEventListener("mouseenter", eraseSquares);                       
      });
    }); 
  });

  // Erase other squares besides first in each column

  let white_squares_2 = document.querySelectorAll('.board_piece_2'); 

  white_squares_2.forEach((board_piece_2) =>{
    board_piece_2.addEventListener("mousedown", (e) => {
      e.target.style.background = 'white';

      white_squares_2.forEach((board_piece_2) => {      
        board_piece_2.addEventListener("mouseenter", eraseSquares);                       
      });
    });

    board_piece_2.addEventListener("mouseup", (e) => {
      
      white_squares_2.forEach((board_piece_2) => {
        board_piece_2.removeEventListener("mouseenter", eraseSquares);                       
      });
    }); 
  });
};





// REFRESh BUTTON


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




// switch statement - erase/ sketch modes - works - 

// on click change global var default_mode to false/true and applay relevant function using switch statement 




  switch (default_mode) {
    case true:
      sketch();
      break;
      
    case false: 
      erase();
      break;
  };


let erase_button = document.querySelector('#erase');

erase_button.addEventListener("click", (default_mode) => {  
  default_mode = false; 
  erase(); 

  switch (default_mode) {
    case true:
      sketch();
      break;      
    case false: 
      erase();
      break;
  };   
});

let sketch_button = document.querySelector('#sketch');

sketch_button.addEventListener("click", (default_mode) => {
  default_mode = true;

  switch (default_mode) {
    case true:
      sketch();
      break;      
    case false: 
      erase();
      break;
  };   
});