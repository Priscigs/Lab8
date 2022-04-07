import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="main"></div>
                        <div class="content">
                            <i className={`fa $ {this.props.icon} fa-$x`}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;