import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ThemeHoc from './ThemeHoc';
import styles from './style';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
@ThemeHoc
class Home extends Component {
  render() {
    const { classes, theme } = this.props
    return (
      <Grid container spacing={23}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Hello I am Elvis
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
