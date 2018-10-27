import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';

@connect(state => ({ theme: state.theme }))
class Footer extends Component {
  render() {
    const { theme } = this.props.theme;
    console.log("THEME", theme)
    return (
      <div style={{
        position: 'absolute',
        bottom: 0,
        background: theme.navBackground,
        width: '100%',
        height: '56px'
      }}
      >
        text
      </div>
    );
  }
}

export default Footer;
