import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import ThemeHoc from './ThemeHoc';
import styles from './style';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
@ThemeHoc
class Discover extends Component {
  render() {
    const { classes, theme } = this.props
    return (
      <Slide direction="top" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper}>
          Hello I am Elviszzz sicvoer
          </Paper>
      </Slide>
    );
  }
}

export default Discover;
