import {
  EMPTY_CLIMATE_STACK,
  POP_CLIMATE_STACK,
  PUSH_CLIMATE_STACK
} from "../actions/classroom-climate.ts";

const initialState = { climateStack: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case PUSH_CLIMATE_STACK:
      return {
        ...state,
        climateStack: [...state.climateStack, action.entry]
      };
    case POP_CLIMATE_STACK:
      return {
        ...state,
        climateStack: state.climateStack.slice(0, state.climateStack.length - 1)
      };
    case EMPTY_CLIMATE_STACK:
      return {
        ...state,
        climateStack: []
      };
    default:
      return state;
  }
};
