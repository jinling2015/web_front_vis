import React from 'react';
import './App.css';
class App extends React.Component {
    render() {
        return (
            <div className = 'container'>
              
                  {(["a", "b", "c", "d"].map((text, index )=> (
                        <div className = 'item' key = {index} >{text}</div>
                  )))}
              
            </div>
        );
    }
}
export default App;