class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  // bindEvents() {
  //   // const that = this;

  //   if (this.game.isOver()) {
  //     if (this.game.winner() === "o") {
  //       alert("you win x");
  //     } else {
  //       alert("you win o")
  //     };
  //   };
    
  //   $(".ttt").on("click", "li", function (e) {
  //     const $li = $(e.currentTarget);
  //     that.makeMove($li);

  //   });
    
  // };

  bindEvents() {
    const that = this;

    $(".ttt").on("click", "li", function (e) {
      const $li = $(e.currentTarget);
      
      if (that.game.isOver()) {
        
        if (that.game.winner() === "o") {
          alert("you win x");
        } else {
          alert("you win o")
        };
        
      } else {
        that.makeMove($li);
      };
    });
  };
    
  
  makeMove($square) {
    $square.removeClass("background");      
    this.game.playMove($square.data("pos"));
    let mark = this.game.currentPlayer;
    $square.addClass(mark);
    $square.text(mark);
    
    
  };

  setupBoard() {
    const $grid = $("<ul></ul>");
    const pos = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];

    for (let i = 0; i < 9; i++) {
      const $cell = $("<li></li>");
      
      $cell.data("pos", pos[i]);
      $cell.addClass("background")
      $cell.appendTo($grid);
    };

    $grid.appendTo(this.$el);
  };
}

module.exports = View;
