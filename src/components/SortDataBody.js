import React from 'react';
import { connect } from 'react-redux'; 
import { generateCurrentData, updateData } from '../actions'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DataBar from './DataBar';
import Typography from '@material-ui/core/Typography'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center'
  }
}); 

class SortDataBody extends React.Component {
  constructor(props) {
    super(props); 

    this.renderElements = this.renderElements.bind(this); 
  }

  componentDidMount() {
    this.props.generateCurrentData(this.props.data.array, this.props.dataInfo.minValue, 
      this.props.dataInfo.maxValue, this.props.dataInfo.elementsSize); 
  }

  componentDidUpdate() {
    if(this.props.data.isSorted === false && this.props.data.currentCount > 0) {
      this.delaySort(); 
    }
  }

  delaySort() {
    setTimeout(() => {
      this.props.updateData(this.props.data);
    }, 300);
}

  renderElements() {
    return (
      this.props.data.array.map((el, index) => {
        return (
          <DataBar key={index} id={index} barValue={el} 
          isCurrent= {index === this.props.data.currentIndex}>
            <h1>{el}</h1>
          </DataBar>
        ); 
      })
    );
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{marginTop: '75px'}}>
          <Typography variant="h4" className={useStyles.root}>{this.props.algorithm.name}</Typography>
          <Button variant="contained" color="primary" style={{marginTop: '20px'}}
            onClick={() => this.props.updateData(this.props.data, this.props.algorithm.name)}>
            Sort!
          </Button>
          {this.renderElements()}
        </Container>
      </React.Fragment>
    ); 
  }
}

const mapStateToProps = (state) => {
  return { 
    data: state.currentData, 
    dataInfo: state.dataInfo,
    algorithm: state.selectedAlgorithm 
  };
}; 

export default connect(mapStateToProps, {generateCurrentData, updateData})(SortDataBody);