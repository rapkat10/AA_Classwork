import React from 'react';

class Tile extends React.Component {
    constructor(props) { // explored, bombed, flagged
        super(props);
    }

    handleClick() {

    }

    render() {
      const tile = this.props.tile; // explored, bombed, flagged
      let count;
      let icon;
      let klass;
        if (tile.explored) {
          //do something
          if (tile.adjacentBombCount >= 1) {
            klass = 'explored';
            count = tile.adjacentBombCount;
            icon = count || "";
            // use count to display the countOfBombs
          } else if (tile.bombed) {
                // alert("You Lost!")
                klass = 'bombed';
                icon = '';
          }
        } else if (tile.flagged) {
            klass = 'flagged';
            icon = "\u2691";
          //use flag to display flagged
        } else {
          // unexplored
          klass = 'unexplored';
        }
      return (
        // our class names will either be explored, flagged, bombed, unexplored
      <div className="tile bombed revealed flagged">
        T 
      </div>
      );
    }
}

export default Tile;