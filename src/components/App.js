import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Home from './Home';
import ThemeHoc from './ThemeHoc';
import styles from './style';
import summer from '../img/waves.jpg';
import winter from '../img/snow.jpg';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
@ThemeHoc
class App extends Component {
  render() {
    const { classes, theme } = this.props
    const img = theme.name === 'summer' ? summer : winter
    return (
      <div className={classes.root} style={{ backgroundImage: `url(${img})` }}>
        <AppBar />
        <Home />
      </div>
    );
  }
}

export default App;
