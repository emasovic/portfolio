import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from './AppBar';
import Home from './Home';
import Discover from './Discover';
import ThemeHoc from './ThemeHoc';
import styles from './style';
import CardMedia from '@material-ui/core/CardMedia';
import samurai from '../img/samurai.png'
import samuraigif from '../img/samuraigif2.gif'
import Footer from './Footer';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
@ThemeHoc
class App extends Component {
  state = {
    display: 'about'
  }
  display = (name) => {
    this.setState({
      display: name
    })
  }
  render() {
    const { classes, theme } = this.props
    const { display } = this.state
    return (
      <div className={classes.root} style={{ background: 'linear-gradient(to right bottom, rgb(36, 42, 67), rgb(27, 32, 51))' }}>
        <AppBar display={this.display} />
        <Grid container>
          <Grid item xs={6}>
            <div className='circle'></div>
            <div className='circle2'></div>
          </Grid>
          <Grid item xs={6}>
            {
              display === 'about' ?
                <Home /> :
                <Discover />
            }
            <div className='avatar'></div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
