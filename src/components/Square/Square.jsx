import React, { Component } from "react";
import classes from './Square.module.css';
class Square extends Component {
    render() {
        const { color, onClick } = this.props;
        return (
            <div
                className={classes.square}
                style={{ backgroundColor: color }}
                onClick={onClick}>
            </div>
        );
    }
}
export default Square;