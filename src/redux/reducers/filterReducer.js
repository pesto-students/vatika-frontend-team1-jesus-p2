import { ActionTypes } from "../constants/ActionTypes";

const initialFilter = {
  searchQuery: "",
  toggle: true,
  byGarden: false,
  byInterior: false,
  byOffice: false,
};

export const filterProductReducer = (
  state = initialFilter,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SORT_BY_PRICE:
      return { ...state, sort: payload };
    case ActionTypes.FILTER_BY_SEARCH:
      return { ...state, searchQuery: payload };
    case ActionTypes.FILTER_BY_GARDEN:
      return {
        ...state,
        category: payload,
        toggle: !state.toggle,
        byGarden: !state.byGarden,
        byInterior: false,
        byOffice: false,
      };
    case ActionTypes.FILTER_BY_INTERIOR:
      return {
        ...state,
        category: payload,
        toggle: !state.toggle,
        byGarden: false,
        byInterior: !state.byInterior,
        byOffice: false,
      };
    case ActionTypes.FILTER_BY_OFFICE:
      return {
        ...state,
        category: payload,
        toggle: !state.toggle,
        byGarden: false,
        byInterior: false,
        byOffice: !state.byOffice,
      };
    case ActionTypes.CLEAR_FILTER: {
      return {
        searchQuery: "",
        toggle: true,
        byGarden: false,
        byInterior: false,
        byOffice: false,
      };
    }
    default:
      return state;
  }
};
