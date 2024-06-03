// For example, in slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        fullName: '',
        password: '',
        country: '',
        username: '',
        id: '',
        coursesEnrolled: [],
        authToken: '',
        city: ''
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setFullName: (state, action) => {
            state.fullName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        },
        enrollCourse: (state, action) => {
            state.coursesEnrolled.push(action.payload);
        },
        setCoursesEnrolled: (state, action) => {
            state.coursesEnrolled = action.payload;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        }
    }
});

export const { setEmail, setPassword, setCity, enrollCourse, setCountry, setFullName, setUsername, setId, setAuthToken, setCoursesEnrolled } = authSlice.actions;
export default authSlice.reducer;

