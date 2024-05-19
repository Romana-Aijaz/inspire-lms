// In store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers';

const store = configureStore({
    reducer: {
        auth: authReducer
        // Add other reducers if any
    }
});

export default store;
