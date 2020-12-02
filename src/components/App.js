import React from 'react';
import Header from './Header'; 
import SortDataBody from './SortDataBody'; 
import './App.css'; 


class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <SortDataBody/>
            </React.Fragment>
        );
    }
}

export default App; 