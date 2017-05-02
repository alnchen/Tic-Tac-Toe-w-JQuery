const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./game/game.js'); // require appropriate file

$( () => {
  // Your code here
  const game = new Game();
  const $ttt = $('.ttt');
  //new view
  const view = new View(game, $ttt);
  // view.setupBoard();

  // $("li").mouseenter(function() {
  //   $("li").css("background-color", "yellow");
  // });

  // $(".pre-click").hover(function(){
  //   this.style.backgroundColor = 'yellow';
  //   }, function() {
  //   this.style.backgroundColor = '';
  //   }
  // );
  // while (!game.isOver()) {

  // }

});
