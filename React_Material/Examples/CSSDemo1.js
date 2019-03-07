import React from 'react';

class CSSDemo1 extends React.Component{
    render() {
        const CSSDemoStyle = {
            margin: '40px',
            border: '5px dashed blue'
        };
        const CSSDemoStyle_Content = {
            fontSize: '15px',
            textAlign: 'center',
            backgroundColor: 'lightgray',
            textTransform: 'lowercase'
        };
    return(
            <div>
                <h3>INLINE STYLING</h3>
                <p>Styles are declared inline as JS Objects</p>
                <div style={CSSDemoStyle}>
                    <p style={CSSDemoStyle_Content}>INLINE STYLING</p>
                </div>

            </div>    
        );
    
    }
}

export default CSSDemo1