import React from 'react';
import * as Minesweeper  from '../minesweeper';

import Board from './board';

// import { foo as bar } from 'my-module';
// import { export1 , export2 as alias2 , [...] } from "module-name";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          board: new Minesweeper.Board(9, 10),
        };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
      // debugger;
      return (
        <div>
          <h1>Minesweeper</h1>
          <div>
            <Board
              board={this.state.board}
              updateGame={this.updateGame}
            />
          </div>
        </div>
      );
    }
}

export default Game;
// render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }