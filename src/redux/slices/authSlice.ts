"use client";

import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type INTIAL_STATE_Type = {
	isLogged: boolean;
};

const INTIAL_STATE: INTIAL_STATE_Type = {
	isLogged: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: INTIAL_STATE,
	reducers: {
        setAuthentication : (state,action:PayloadAction<boolean>)=>{
            state.isLogged = action.payload
        }
    },
});

export const {setAuthentication} = authSlice.actions

export default authSlice.reducer