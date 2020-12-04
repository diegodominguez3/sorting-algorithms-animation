import React from 'react';
import {connect} from 'react-redux';
import {selectAlgorithm, generateCurrentData} from '../actions'; 
import clsx from 'clsx';
import logo from '../assets/react_icon.svg'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar,CssBaseline, List, 
         Typography, Divider, IconButton, ListItem, ListItemText, Avatar}  from '@material-ui/core'; 
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgb(37, 48, 59)'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  toolBar: {
    justifyContent: 'space-between'
  }, 
  logo: {
    justifyContent: 'space-between',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function renderAlgorithms() {
    return props.algorithms.map((algo, index) => {
      return (
        <ListItem key={index} id={index} button onClick={() => {
          handleDrawerClose(); 
          props.selectAlgorithm(algo);
          props.generateCurrentData(props.currentData.array, props.dataInfo.minValue, 
          props.dataInfo.maxValue, props.dataInfo.elementsSize); 
         }}>
          <ListItemText>{algo.name}</ListItemText>
        </ListItem>
      )
    });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <Avatar src={logo} alt="react-logo" className={classes.logo}/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <Typography style={{marginRight: '20px'}} >Sorting Algorithms</Typography>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography>Sorting Algorithms</Typography>
        </div>
        <Divider />
        <List>
          {renderAlgorithms()}
        </List>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {  
  console.log(state); 
  return state;
}

export default connect(mapStateToProps, { selectAlgorithm, generateCurrentData })(Header); 
