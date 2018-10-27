import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Feedback, Language, Email, Extension } from '@material-ui/icons';
import styles from './style';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
class Header extends Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  changeTheme = () => {
    const { theme } = this.props
    this.props.dispatch({
      type: theme.name === 'winter' ? 'SUMMER' : 'WINTER'
    })
  };
  render() {
    const { value } = this.state;
    const { theme } = this.props.theme;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        style={{ background: theme.navBackground, justifyContent: 'flex-end' }}
        showLabels
      >
        <BottomNavigationAction
          label="About"
          selected='red'
          // style={{color: 'white'}}
          onClick={() => { this.props.display("about") }}
          icon={<Feedback />}
        />
        <BottomNavigationAction
          label="Discover"
          onClick={() => { this.props.display("discover") }}
          icon={<Language />}
        />
        <BottomNavigationAction
          label="Contact"
          onClick={() => { this.props.display("contact") }}
          icon={<Email />}
        />
        <BottomNavigationAction
          label="Click me"
          onClick={this.changeTheme}
          icon={<Extension />}
        />
      </BottomNavigation>
    );
  }
}

export default Header;
