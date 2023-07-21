// import './App.css'
// import {useState} from "react";
// import {Square} from "./components/Square/Square.jsx";
//
//
// export default function App() {
//
//     const [color1, setColor1] = useState("blue")
//     const [color2, setColor2] = useState("red")
//
//     const handle1 = () => {
//         setColor1(color1 === "blue" ? "red" : "blue")
//         setColor2(color2 === "red" ? "blue" : "red")
//     }
//
//    
//     const handle2 = () => {
//         setColor1(color1 === "red" ? "blue" : "red")
//         setColor2(color2=== "blue" ? "red" : "blue")
//     }
//
//     return (
//         <div>
//             <Square color={color1} onClick={handle1}/>
//             <Square color={color2} onClick={handle2}/>
//         </div>
//     )
// }
import React, { Component } from 'react';
import Square from "./components/Square/Square.jsx";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: 'red',
            color2: 'blue'
        };
    }
    handle1 = () => {
        this.setState(prevState => ({
            color1: prevState.color1 === 'red' ? 'blue' : 'red',
            color2: prevState.color2 === 'blue' ? 'red' : 'blue'
        }));
    }
    handle2 = () => {
        this.setState(prevState => ({
            color2: prevState.color2 === 'red' ? 'blue' : 'red',
            color1: prevState.color1 === 'blue' ? 'red' : 'blue'
        }));
    }
    render() {
        const { color1, color2 } = this.state;
        return (
            <div>
                <Square color={color1} onClick={this.handle1} />
                <Square color={color2} onClick={this.handle2} />
            </div>
        );
    }
}
export default App;