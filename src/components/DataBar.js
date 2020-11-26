import React from 'react'; 
import styled from 'styled-components'; 

class DataBar extends React.Component {
    render() {
    const Bar = styled.div`
        height: 40px; 
        width: ${this.props.barValue}%;
        background: #14A9C1; 
    `;
        return (
            <Bar>
                <h1>{this.props.barValue}</h1>        
            </Bar>
        ); 
    }
}

export default DataBar; 