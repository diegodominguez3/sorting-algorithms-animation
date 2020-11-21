import React from 'react';
import Header from './Header'; 
import SortData from './SortData'; 
import './App.css'; 


class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <SortData/>
            </React.Fragment>
        );
    }
}

export default App; 