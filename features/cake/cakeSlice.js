//import createSlice function
const createSlice = require("@reduxjs/toolkit").createSlice;

//creating Initialstate of the cakeSlice feature
const initialState = {
  numOfCakes: 10,
};

// Creating cakeSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// exporting the cake reducer
module.exports = cakeSlice.reducer;
// exporting the cake Actions which is created for us by redux toolkit behind the scenes
module.exports.cakeActions = cakeSlice.actions;
