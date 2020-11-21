import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class SortData extends React.Component {
    render() {
        return (
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
          </React.Fragment>
        ); 
    }
}

export default SortData;