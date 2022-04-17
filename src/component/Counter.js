import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0,
        message: '',
        username: '',
    };

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: '',
            username: '',
        });
    };
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };
    render() {
        const { number, fixedNumber, message } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 }, () => {
                            console.log('setState called.');
                        });
                    }}
                >
                    +1
                </button>
                <input
                    type="text"
                    name="message"
                    placeholder="Input the word"
                    value={message}
                    onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({ message: e.target.value });
                    }}
                />
                <button
                    onClick={() => {
                        alert(this.state.message);
                        this.setState({ message: '' });
                    }}
                >
                    Confirm
                </button>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Input the uername"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="Input the message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.handleClick}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default Counter;
