import React from 'react';
import Board from './Board';
import deck from './component/deck';
import './StartApp.css';
import Title  from './Title';

const getInitState = () => {
    const deckCards = deck();
    return {
        deckCards
    };
}
 
class StartApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = getInitState();
    }

    render() {
        return (
            <div className='StartApp'>
                <Title></Title>
                <Board deckCards = {this.state.deckCards}/>
            </div>
        );
    }
}
export default StartApp;