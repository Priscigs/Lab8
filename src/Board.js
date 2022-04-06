import React from 'react';
import Card from './Card';
import './Board.css';

class Board extends React.Component {
    render() {
        //const cards = [1,2,3,4];
        return (
            <div className="board">
                {
                    this.props.deckCards.map((card) => <Card icon={ card.icon }/>)
                }
            </div>
        );
    }
}

export default Board;