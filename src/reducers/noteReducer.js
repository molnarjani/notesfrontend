import { FETCH_NOTES } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
