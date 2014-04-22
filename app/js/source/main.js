(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#start').click(loadGame);
    $('body').keydown(move);
  }
  var pacman;
  var x;
  var y;

  function loadGame(){
    clearBoard();
    loadPacMan();
    loadPellet();
  }

 function loadPacMan(){
   var randomX = Math.floor(Math.random()*2);
   var randomY = Math.floor(Math.random()*3);


   pacman = $('td[data-positionx='+randomX+'][data-positiony='+randomY+']');
   x = randomX;
   y = randomY;
   pacman.addClass('pacman');

 }

  function loadPellet(){
    var randomX = Math.floor(Math.random()*2);
    var randomY = Math.floor(Math.random()*3);

    pacman = $('td[data-positionx='+randomX+'][data-positiony='+randomY+']');
    pacman.addClass('pellet');

  }

  function move(event){
    switch(event.keyCode){
    case 38:
      y--;

      pacman =$('td[data-positionx='+x+'][data-positiony='+y+']');
      pacman.addClass('move');
      paintScreen();
      checkWin();
      break;
    case 40:
      y++;

      pacman =$('td[data-positionx='+x+'][data-positiony='+y+']');
      pacman.addClass('move');
      paintScreen();
      checkWin();
      break;
    case 37:
      x--;

      pacman =$('td[data-positionx='+x+'][data-positiony='+y+']');
      pacman.addClass('move');
      paintScreen();
      checkWin();
      break;
    case 39:
      x++;

      pacman =$('td[data-positionx='+x+'][data-positiony='+y+']');
      pacman.addClass('move');
      paintScreen();
      checkWin();

    }


    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
      event.preventDefault();
    }
  }

  function paintScreen(){
     $('.pacman').removeClass();
     $('.move').addClass('pacman');
  }

  function checkWin(){
    if($('.move').hasClass('pellet')){
      alert('you win');
    }
  }

  function clearBoard(){
    $('.pacman').removeClass();
    $('.pellet').removeClass();
    $('.move').removeClass();
  }

})();
