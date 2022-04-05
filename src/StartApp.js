import React from 'react';
import Board from './Board';
import './StartApp.css';
 
class StartApp extends React.Component {
    render() {
        return (
            <div className='StartApp'>
                <Board></Board>
            </div>
        );
    }
}
export default StartApp;