import React from 'react';
import CSSJS from './CSSinJS';

class CSSDemo2 extends React.Component{
    render() {
 
        return (
            <div>
            
                <h3>CSS-IN-JS (File based)</h3>
                <p></p>
                <div style={CSSJS.CSSDemo_CSSInJS}>
                    <p style={CSSJS.CSSDemo_Content_CSSInJS}>CSS in JS</p>
                </div>

            </div>
        );
    }
}

export default CSSDemo2