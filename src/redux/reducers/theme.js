import { SUMMER, WINTER } from '../actions/actions';
import blue from '../themes/blue';
import red from '../themes/red';

const theme = (state = { theme: blue, name: "winter" }, action) => {
  switch (action.type) {
    case SUMMER: {
      const newState = { ...state, theme: red, name: "summer" };
      return newState;
    }
    case WINTER: {
      const newState = { ...state, theme: blue, name: "winter" };
      return newState;
    }
    default:
      return state;
  }
};

export default theme;