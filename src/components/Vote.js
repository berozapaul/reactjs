import React, { Component } from 'react';

class Vote extends Component{
    state = {
        count: this.props.data,
    }

    increment = () => {
        this.setState({'count': ++this.state.count});
    };

    decrement = () => {
        this.setState({'count': --this.state.count});
    };

    render(){
        return (
            <div>
                <h4>Our initial count: {this.state.count}</h4>
                <a href="#" onClick={this.increment}>Vote up</a>&nbsp;<br/>
                <a href="#" onClick={this.decrement}>Dec</a>
            </div>
        )
    }
}

export default Vote