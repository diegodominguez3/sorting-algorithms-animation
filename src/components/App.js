import React from 'react';
import styled from 'styled-components'
import Header from './Header'; 

const Container = styled.div`
        max-width: 1440px; 
        margin: 0 auto; 
    `;

class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <Container>Hello World!</Container>
            </React.Fragment>
        );
    }
}

export default App; 