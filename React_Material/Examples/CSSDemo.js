import './CSSDemo.css';
import React from 'react';

class CSSDemo extends React.Component{

    render(){
        return (
            <div>
                <h3>PLAIN CSS STYLESHEET FILE</h3>
                <p>Styles are imported from a plain CSS File</p>
                <div className="CSSDemo">
                    <p className="CSSDemo_content">ReactJS</p>
                </div>
            </div>
        );
    }
}

export default CSSDemo