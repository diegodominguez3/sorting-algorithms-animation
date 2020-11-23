import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class SortData extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      elements: [],
      elementsSize: 10,
      minValue: 1, 
      maxValue: 100
    }
    this.populateElementsList = this.populateElementsList.bind(this); 
    this.getRandomInt = this.getRandomInt.bind(this); 
    this.renderElements = this.renderElements.bind(this); 
  }

  componentDidMount() {
    this.setState({elements: this.populateElementsList()}); 
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  populateElementsList () {
    let tempList = []; 
    for(let i = 0; i < this.state.elementsSize; i++) {
      const randomNum = this.getRandomInt(this.state.minValue, this.state.maxValue)
      tempList.push(randomNum); 
    }
    return  tempList; 
  }

  renderElements() {
    return (
      this.state.elements.map((el) => {
        return (
          <div key={el}><h1>{el}</h1></div>
        ); 
      })
    ); 
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{marginTop: '75px'}}>
          {this.renderElements()}
        </Container>
      </React.Fragment>
    ); 
}
}

export default SortData;