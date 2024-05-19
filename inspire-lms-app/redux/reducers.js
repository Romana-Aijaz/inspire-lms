// For example, in slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        fullName: '',
        password: '',
        contact: '',
        university: '',
        coursesEnrolled: []
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setFullName: (state, action) => {
            state.fullName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setContact: (state, action) => {
            state.contact = action.payload;
        },
        setUniversity: (state, action) => {
            state.university = action.payload;
        },
        enrollCourse: (state, action) => {
            state.coursesEnrolled.push(action.payload);
        }
    }
});

export const { setEmail, setPassword, setUniversity, enrollCourse, setContact, setFullName } = authSlice.actions;
export default authSlice.reducer;

