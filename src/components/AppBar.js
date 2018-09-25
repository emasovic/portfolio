import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from './style';

@connect(state => ({ theme: state.theme }))
@withStyles(styles)
class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  changeTheme = (color) => {
    this.props.dispatch({
      type: color
    })
    this.setState({ anchorEl: null, theme: color });
  };
  render() {
    const { classes } = this.props
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            News
          </Typography>
          {
            auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                // onClose={this.changeTheme}
                >
                  <MenuItem onClick={() => this.changeTheme("SUMMER")}>Red</MenuItem>
                  <MenuItem onClick={() => this.changeTheme("WINTER")}>Blue</MenuItem>
                </Menu>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
