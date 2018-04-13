import React, { Component } from "react";



export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time : new Date()}
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        if (this.clockId) {
            clearInterval(this.clockId);
        }
    }

    tick() {
        this.clockId = setInterval(() => {
            this.setState( previousState => {
                return {time : new Date()}
            });
        }, 1000)
    }

    render() {
        return (
            <div style={{color: 'white'}} className={'clock'}>{this.state.time.toLocaleTimeString()}</div>
        );
    }
}