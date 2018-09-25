import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function ComposedThemeHoc(Component) {
  return class extends Component {
    render() {
      const { theme } = this.props.theme
      const choosenTheme = createMuiTheme(theme)
      console.log("HOC PROPS", this.props)
      return (
        <MuiThemeProvider theme={choosenTheme}>
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  };
}
const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});
const ThemeHoc = compose(
  connect(mapStateToProps, mapDispatchToProps),
  ComposedThemeHoc
)


export default ThemeHoc;