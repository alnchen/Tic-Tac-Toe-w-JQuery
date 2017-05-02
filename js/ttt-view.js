class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // const game = this.game;
    this.$el.click( (e) => {
      console.log(e);
      const pos = $(e.target).data("pos");
      if (this.game.board.isEmptyPos(pos)){
        this.makeMove($(e.target));
      }
    });
  }

  makeMove($square) {
    this.game.playMove($square.data("pos"));
    $square.text(this.game.currentPlayer);
    console.log(this.game.currentPlayer);
    this.game.currentPlayer === "x" ? $square.addClass("x") : $square.addClass("o");
    $square.removeClass("pre-click").addClass("clicked");

    if (this.game.isOver() === true) {
      $("body").append("<p>player wins!</p>");
      if (this.game.winner() != null) {
        // $("li").attr("disabled");
      } else {
        $("body").append("<p>Cats game</p>");
      }
    }
  }

  setupBoard() {
    // const $ul = $('ul');
    for (var i = 0; i < 3; i++) {
      this.$el.append('<ul></ul>');
      for (var j = 0; j < 3; j++) {
        $('ul:last').append('<li></li>');
        $('li:last').data("pos", [i, j]);
        $('li:last').addClass("pre-click");
        console.log($('li:last').data("pos"));
      }
    }
  }
}

// $("ul").on("mouseenter", $("li"), e => {
//   const $square = $(e.currentTarget);
//   $square.css("background-color", "yellow");
// });

// $("li").mouseenter(function() {
//   $("li").css("background-color", "yellow");
// });

module.exports = View;
