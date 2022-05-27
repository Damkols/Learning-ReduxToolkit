// Import configureStore from redux-toolkit
const configureStore = require("@reduxjs/toolkit").configureStore;
// Import cake reducer from cakeSlice.js
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreanReducer = require("../features/icecream/iceCreamSlice");

// configuring the store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreanReducer,
  },
});

// exporting the store
module.exports = store;
