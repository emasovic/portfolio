import { TEST } from '../actions/actions';

const test = (state = { count: 0 }, action) => {
  switch (action.type) {
    case TEST: {
      const newState = { ...state, count: action.count };
      return newState;
    }
    default:
      return state;
  }
};

export default test;