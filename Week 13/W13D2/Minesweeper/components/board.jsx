import React from 'react';

import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    }


    render() {
        return ( <div className="grid">{this.renderRows()}</div> )
    }

    renderRows(){
        return this.props.board.grid.map((row, idx) => {
          return (
            <div className="row" key={idx}>
              {this.renderTiles(row)}
            </div>
          );
        })
    }

    renderTiles(row){
      return row.map((tile, idx) => {
        return ( 
        <Tile 
            tile={tile} 
            updateGame={this.props.updateGame} 
            key={idx} 
        />
        );
      })
    }
    
}

export default Board;
