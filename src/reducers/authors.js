const authorsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_AUTHORS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default authorsReducer;
