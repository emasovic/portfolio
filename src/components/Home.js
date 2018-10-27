import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import ThemeHoc from './ThemeHoc';
import styles from './style';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
@ThemeHoc
class Home extends Component {
  render() {
    const { classes, theme } = this.props
    return (
      <Slide in={true} timeout={700} mountOnEnter unmountOnExit>
        <Paper className={classes.paper}>
          <Slide direction="right" timeout={1000} in={true} mountOnEnter unmountOnExit>
            <h2>a lover of coding</h2>
          </Slide>
          <p>I'm a Front End developer with main focus on ReactJS and React-Native.
            My experiences range from building responsive websites that work well cross-browser to building complex webapps and mobileapps. I like working on projects with a team that cares about creating beautiful and usable interfaces.
          </p>
        </Paper>
      </Slide>
    );
  }
}

export default Home;
