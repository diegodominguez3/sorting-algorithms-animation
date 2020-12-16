import React from 'react'; 
import styled from 'styled-components'; 

class DataBar extends React.Component {
    render() {
    const Bar = styled.div`
        height: 30px; 
        width: ${this.props.barValue}%;
        background: #14A9C1;
    `;
        return (
            <Bar>
                <h2 style={{paddingLeft: '10px'}}>{this.props.barValue}</h2>        
            </Bar>
        ); 
    }
}

export default DataBar; 